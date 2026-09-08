import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './auth.model';

export const signup = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required!' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already in use!' });
    }

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email is already in use!' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Normalize role
    let userRole = 'ROLE_RENTER';
    if (role === 'FARMER' || role === 'ROLE_FARMER') {
      userRole = 'ROLE_FARMER';
    } else if (role === 'ADMIN' || role === 'ROLE_ADMIN') {
      userRole = 'ROLE_ADMIN';
    }

    // Create user
    await User.create({
      username,
      email,
      password: hashedPassword,
      role: userRole
    });

    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Registration failed';
    return res.status(500).json({ message });
  }
};

export const signin = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required!' });
    }

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid Password!' });
    }

    const secret = process.env.JWT_SECRET || 'plotfarm-secret-key';
    const token = jwt.sign(
      { id: user.id, role: user.role },
      secret,
      { expiresIn: 86400 } // 24 hours
    );

    return res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      accessToken: token
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Sign in failed';
    return res.status(500).json({ message });
  }
};
