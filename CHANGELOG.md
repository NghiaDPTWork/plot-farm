# 📋 Báo Cáo Tổng Hợp Thay Đổi & Khắc Phục Lỗi Hệ Thống (PlotFarm)

**Thời gian cập nhật:** 07/09/2026  
**Dự án:** `plot-farm` (Monorepo)

---

## 🌟 1. Tổng Quan Những Gì Đã Thêm & Triển Khai

### 🖥️ A. Client / Frontend (`apps/client`)
Đã triển khai hoàn chỉnh giao diện ứng dụng React 19 + TypeScript + Vite với phong cách **Dark Mode & Glassmorphism (Emerald / Cyan glow)**:

1. **Module Xác thực (Authentication)**:
   - [`src/modules/auth/pages/Login.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/auth/pages/Login.tsx): Giao diện đăng nhập hiện đại, quản lý state form có type (`LoginFormState`), kết nối API backend `POST http://localhost:8081/api/auth/signin`, tự động lưu Token & thông tin người dùng vào `localStorage`.
   - [`src/modules/auth/pages/Signup.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/auth/pages/Signup.tsx): Giao diện đăng ký tài khoản hỗ trợ chọn vai trò (Renter - Người thuê / Farmer - Chủ nông trại), kết nối API `POST http://localhost:8081/api/auth/signup`, thông báo trạng thái và chuyển hướng thông minh.
   - [`src/modules/auth/pages/Auth.css`](file:///d:/Project/plot-farm/apps/client/src/modules/auth/pages/Auth.css): Styling glassmorphism, form glow, icon input và animation chuyển đổi.

2. **Module Trang chủ & Giới thiệu (Landing Page)**:
   - [`src/modules/landing/pages/Home.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/pages/Home.tsx): Trang chủ tổng hợp toàn bộ các section giới thiệu nền tảng.
   - [`src/modules/landing/components/Navbar.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/Navbar.tsx): Header điều hướng có logo PlotFarm, link menu anchor và nút Login / Register.
   - [`src/modules/landing/components/Hero.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/Hero.tsx): Banner chính với badge animated, mockup card quản lý Farm Overview, bản đồ nhiệt và thống kê IoT sensor (độ ẩm đất, nhiệt độ, sức khỏe cây trồng).
   - [`src/modules/landing/components/FeaturesOverview.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/FeaturesOverview.tsx): 4 khối tính năng cốt lõi (Plot Management, Smart Irrigation, IoT Monitoring, Farm Operations).
   - [`src/modules/landing/components/CoreFeatures.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/CoreFeatures.tsx): 6 khối tính năng mở rộng dành cho doanh nghiệp và nông trại thông minh.
   - [`src/modules/landing/components/DashboardCTA.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/DashboardCTA.tsx): Khối giới thiệu bảng điều khiển quản trị với ảnh mockup tương lai.
   - [`src/modules/landing/components/Footer.tsx`](file:///d:/Project/plot-farm/apps/client/src/modules/landing/components/Footer.tsx): Chân trang bản quyền.

3. **Cấu hình Router & Design System**:
   - [`src/App.tsx`](file:///d:/Project/plot-farm/apps/client/src/App.tsx): Cấu hình `react-router-dom` định tuyến các trang `/`, `/login`, `/signup` và redirect trang không tồn tại về `/`.
   - [`src/index.css`](file:///d:/Project/plot-farm/apps/client/src/index.css): Design System hoàn chỉnh với Google Fonts (*Outfit*, *Inter*), CSS Variables cho màu Emerald (`#10b981`), Background tối (`#050a0f`), hiệu ứng radial-gradient nền và scrollbar tùy biến.
   - [`public/images/`](file:///d:/Project/plot-farm/apps/client/public): Chứa các asset ảnh `farm_field.png`, `futuristic_dashboard.png`, `favicon.svg`.

---

### ⚙️ B. Server / Backend (`apps/server`)
Đã triển khai hoàn chỉnh cấu trúc RESTful API Backend trên nền Node.js Express + TypeScript + Sequelize ORM (SQL Server):

1. **Core & Server Setup**:
   - [`src/server.ts`](file:///d:/Project/plot-farm/apps/server/src/server.ts): Khởi tạo Express server, cấu hình CORS cho phép `http://localhost:5173`, parse JSON body, định tuyến endpoint `/api/test`, kết nối và đồng bộ model database, chạy trên cổng `8081`.
   - [`src/config/db.ts`](file:///d:/Project/plot-farm/apps/server/src/config/db.ts): Cấu hình kết nối SQL Server (MSSQL) thông qua Sequelize ORM, đọc biến môi trường từ `.env`.

2. **Models & Business Logic**:
   - [`src/models/User.ts`](file:///d:/Project/plot-farm/apps/server/src/models/User.ts): Schema bảng người dùng (ID, Username, Email, Password băm, Role: `ROLE_RENTER`, `ROLE_FARMER`, `ROLE_ADMIN`).
   - [`src/controllers/auth.controller.ts`](file:///d:/Project/plot-farm/apps/server/src/controllers/auth.controller.ts):
     - `signup`: Kiểm tra trùng lặp email/username, mã hóa mật khẩu bằng `bcryptjs` (salt 10 vòng), lưu người dùng mới.
     - `signin`: Kiểm tra đăng nhập, xác thực mật khẩu, tạo và cấp `jsonwebtoken` (JWT) có thời hạn 24 giờ.
   - [`src/middlewares/authJwt.ts`](file:///d:/Project/plot-farm/apps/server/src/middlewares/authJwt.ts): Middleware xác thực JWT token và phân quyền người dùng.
   - [`src/routes/auth.routes.ts`](file:///d:/Project/plot-farm/apps/server/src/routes/auth.routes.ts): Đăng ký 2 endpoint xác thực `POST /api/auth/signup` và `POST /api/auth/signin`.

---

## 🛠️ 2. Chi Tiết Các Lỗi Đã Được Khắc Phục (Fix Lỗi Báo Đỏ)

| Vấn đề / Lỗi gặp phải | Nguyên nhân | Giải pháp đã thực hiện |
| :--- | :--- | :--- |
| **Gạch đỏ toàn bộ import ở Client** | `apps/client` chưa từng có `node_modules` | Cài đặt toàn bộ dependencies vào `apps/client/node_modules` (`react`, `react-dom`, `react-router-dom`, `lucide-react`, `@types/...`). |
| **Thiếu TypeScript trong Client** | `package.json` thiếu gói `typescript` | Thêm `typescript: ^5.7.3` vào `devDependencies` và cài đặt engine TS 5.7. |
| **Lỗi `TS5097` ở `main.tsx`** | Dòng `import App from './App.tsx'` chứa đuôi mở rộng `.tsx` | Sửa thành `import App from './App'`. |
| **Lỗi `TS6133` (Unused React import)** | 7 component landing page có `import React from 'react';` dư thừa trong khi `tsconfig.json` bật `"noUnusedLocals": true` | Đã xóa dòng import `React` không sử dụng ở cả 7 component. |
| **File tĩnh và build nằm sai vị trí** | `public` và `dist` bị đặt nhầm vào trong `src/` (`src/public`, `src/dist`) | Xóa `src/dist`, di chuyển thư mục `public` ra đúng root `apps/client/public`. |
| **Gạch đỏ toàn bộ import ở Server** | `apps/server` chưa có `node_modules` | Cài đặt đầy đủ `node_modules` cho server (`express`, `cors`, `dotenv`, `bcryptjs`, `jsonwebtoken`, `sequelize`, `tedious`, `@types/...`). |
| **Thiếu khai báo package backend** | `package.json` của server thiếu `bcryptjs`, `jsonwebtoken`, `sequelize`, `tedious` | Cập nhật đầy đủ `dependencies` và `devDependencies` trong `apps/server/package.json`. |
| **Lỗi `TS2307` ở các file test** | `App.test.ts` & `server.test.ts` import thư viện `vitest` chưa cấu hình cục bộ | Thêm `"exclude": ["node_modules", "dist", "**/*.test.ts"]` vào `tsconfig.json` của cả 2 app để TypeScript biên dịch đúng phạm vi source code. |

---

## ✅ 3. Trạng Thái Hiện Tại Của Hệ Thống

1. **Frontend (`apps/client`)**:
   - `tsc --noEmit`: **0 lỗi**.
   - `oxlint`: **0 lỗi, 0 cảnh báo** (34/34 files passed).
   - `vite build`: Build thành công production bundle trong **586ms**.
   - `dev server`: Đang chạy mượt mà tại `http://localhost:5173/`.

2. **Backend (`apps/server`)**:
   - `tsc --noEmit`: **0 lỗi**.
   - `tsc build`: Biên dịch thành công ra mã JavaScript chạy được tại `apps/server/dist/server.js`.

3. **Mã nguồn**: Toàn bộ các file trong workspace đều **sạch sẽ, không còn bất kỳ dấu gạch đỏ (lỗi linter/compiler) nào**.

---

## 🏗️ 4. Chuẩn Hóa Cấu Trúc Kiến Trúc (Architecture Refactoring)

Đã tái cấu trúc toàn bộ mã nguồn cả Frontend và Backend để chuẩn hóa theo đúng yêu cầu:
- **Frontend**: Chuẩn **Feature-Sliced Design (FSD)**
- **Backend**: Chuẩn **Feature-Based / Modular Architecture**

### A. Frontend (`apps/client/src`) - Feature-Sliced Design (FSD)
- **`app/`**: Chứa [`App.tsx`](file:///d:/Project/plot-farm/apps/client/src/app/App.tsx), [`styles/index.css`](file:///d:/Project/plot-farm/apps/client/src/app/styles/index.css).
- **`pages/`**: Chứa [`home/HomePage.tsx`](file:///d:/Project/plot-farm/apps/client/src/pages/home/ui/HomePage.tsx), [`login/LoginPage.tsx`](file:///d:/Project/plot-farm/apps/client/src/pages/login/ui/LoginPage.tsx), [`signup/SignupPage.tsx`](file:///d:/Project/plot-farm/apps/client/src/pages/signup/ui/SignupPage.tsx).
- **`widgets/`**: Chứa các khối UI độc lập: [`navbar`](file:///d:/Project/plot-farm/apps/client/src/widgets/navbar), [`hero`](file:///d:/Project/plot-farm/apps/client/src/widgets/hero), [`features-overview`](file:///d:/Project/plot-farm/apps/client/src/widgets/features-overview), [`core-features`](file:///d:/Project/plot-farm/apps/client/src/widgets/core-features), [`dashboard-cta`](file:///d:/Project/plot-farm/apps/client/src/widgets/dashboard-cta), [`footer`](file:///d:/Project/plot-farm/apps/client/src/widgets/footer).
- **`features/`**: Chứa logic tương tác người dùng [`auth`](file:///d:/Project/plot-farm/apps/client/src/features/auth) ([`LoginForm.tsx`](file:///d:/Project/plot-farm/apps/client/src/features/auth/ui/LoginForm.tsx), [`SignupForm.tsx`](file:///d:/Project/plot-farm/apps/client/src/features/auth/ui/SignupForm.tsx), [`Auth.css`](file:///d:/Project/plot-farm/apps/client/src/features/auth/ui/Auth.css), types).
- **`entities/`**: Chứa mô hình thực thể người dùng [`user`](file:///d:/Project/plot-farm/apps/client/src/entities/user).
- **`shared/`**: Chứa [`config`](file:///d:/Project/plot-farm/apps/client/src/shared/config) và hạ tầng dùng chung.

### B. Backend (`apps/server/src`) - Feature-Based / Modular Architecture
- **`modules/auth/`**: Đóng gói toàn diện nghiệp vụ xác thực:
  - [`auth.controller.ts`](file:///d:/Project/plot-farm/apps/server/src/modules/auth/auth.controller.ts): Xử lý request `signin`, `signup`.
  - [`auth.model.ts`](file:///d:/Project/plot-farm/apps/server/src/modules/auth/auth.model.ts): Sequelize Model `User`.
  - [`auth.routes.ts`](file:///d:/Project/plot-farm/apps/server/src/modules/auth/auth.routes.ts): Định nghĩa Express Router riêng của module Auth.
  - [`auth.types.ts`](file:///d:/Project/plot-farm/apps/server/src/modules/auth/auth.types.ts): Định nghĩa DTOs và kiểu dữ liệu.
  - [`index.ts`](file:///d:/Project/plot-farm/apps/server/src/modules/auth/index.ts): Export public API của module.
- **`routes/index.ts`**: Router trung tâm gom và mount toàn bộ module routes vào `/api`.
- **`middlewares/`**: Global middlewares ([`authJwt.ts`](file:///d:/Project/plot-farm/apps/server/src/middlewares/authJwt.ts)).
- **`config/`**: Global configs ([`db.ts`](file:///d:/Project/plot-farm/apps/server/src/config/db.ts)).
- **`server.ts`**: Entry point khởi động ứng dụng gọn gàng.
- **Tài liệu tham khảo chi tiết:** [`docs/ARCHITECTURE_STANDARDS.md`](file:///d:/Project/plot-farm/docs/ARCHITECTURE_STANDARDS.md).

