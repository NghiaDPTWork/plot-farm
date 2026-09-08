/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'express' {
  import { IncomingMessage, ServerResponse } from 'http';

  export interface Request extends IncomingMessage {
    body?: any;
    params?: Record<string, string>;
    query?: Record<string, any>;
    headers: Record<string, string | string[] | undefined>;
    header(name: string): string | undefined;
    get(name: string): string | undefined;
    userId?: number;
    userRole?: string;
  }

  export interface Response extends ServerResponse {
    status(code: number): this;
    json(body?: any): this;
    send(body?: any): this;
    header(name: string, value: string): this;
    setHeader(name: string, value: string): this;
  }

  export type NextFunction = (err?: any) => void;

  export type RequestHandler = (req: Request, res: Response, next: NextFunction) => any;

  export interface Router {
    use(...handlers: any[]): this;
    get(path: string, ...handlers: RequestHandler[]): this;
    post(path: string, ...handlers: RequestHandler[]): this;
    put(path: string, ...handlers: RequestHandler[]): this;
    delete(path: string, ...handlers: RequestHandler[]): this;
  }

  export interface Application {
    use(...handlers: any[]): this;
    get(path: string, ...handlers: RequestHandler[]): this;
    post(path: string, ...handlers: RequestHandler[]): this;
    put(path: string, ...handlers: RequestHandler[]): this;
    delete(path: string, ...handlers: RequestHandler[]): this;
    listen(port: number | string, callback?: () => void): any;
  }

  function express(): Application;
  namespace express {
    export function json(options?: any): RequestHandler;
    export function urlencoded(options?: any): RequestHandler;
    export function Router(options?: any): Router;
  }

  export default express;
}

declare module 'cors' {
  import { RequestHandler } from 'express';
  interface CorsOptions {
    origin?: string | boolean | RegExp | (string | RegExp)[] | ((origin: string, callback: (err: Error | null, allow?: boolean) => void) => void);
    methods?: string | string[];
    allowedHeaders?: string | string[];
    exposedHeaders?: string | string[];
    credentials?: boolean;
    maxAge?: number;
  }
  function cors(options?: CorsOptions): RequestHandler;
  export default cors;
}

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    [key: string]: any;
    id?: number;
    role?: string;
    exp?: number;
    iat?: number;
  }

  export interface SignOptions {
    expiresIn?: string | number;
    algorithm?: string;
  }

  export type VerifyCallback = (err: Error | null, decoded?: JwtPayload | string) => void;

  export function sign(payload: string | Buffer | object, secretOrPrivateKey: string | Buffer, options?: SignOptions): string;
  export function verify(token: string, secretOrPublicKey: string | Buffer, callback?: VerifyCallback): void;
  export function verify(token: string, secretOrPublicKey: string | Buffer): JwtPayload | string;

  const jwt: {
    sign: typeof sign;
    verify: typeof verify;
  };
  export default jwt;
}

declare module 'bcryptjs' {
  export function genSalt(rounds?: number): Promise<string>;
  export function hash(s: string, salt: string | number): Promise<string>;
  export function compare(s: string, hash: string): Promise<boolean>;
  const bcrypt: {
    genSalt: typeof genSalt;
    hash: typeof hash;
    compare: typeof compare;
  };
  export default bcrypt;
}
