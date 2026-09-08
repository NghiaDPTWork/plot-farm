# 📐 Quy Chuẩn Kiến Trúc Dự Án PlotFarm (Architecture Standards)

Tài liệu này định nghĩa chi tiết cấu trúc phân tầng và chuẩn thiết kế kiến trúc mã nguồn cho **Frontend** và **Backend** của dự án `plot-farm`.

---

## 🎨 1. Frontend: Feature-Sliced Design (FSD)

Frontend (`apps/client/src`) được tổ chức nghiêm ngặt theo phương pháp **Feature-Sliced Design (FSD)** nhằm đảm bảo tính module hóa, dễ mở rộng, kiểm thử và bảo trì.

### Quy tắc phân tầng (Layers) từ trên xuống:
Mỗi layer chỉ được phép import từ các layer **bên dưới nó** (Strict Unidirectional Dependency).

```text
apps/client/src/
├── app/                  # LAYER 1: APP INITIALIZATION
│   ├── styles/           # Global styles (index.css, CSS variables, typography)
│   ├── App.tsx           # Top-level Router & Global Providers
│   └── index.ts
│
├── pages/                # LAYER 2: PAGES / VIEWS
│   ├── home/             # Trang chủ (HomePage, Home.css)
│   ├── login/            # Trang đăng nhập (LoginPage)
│   ├── signup/           # Trang đăng ký (SignupPage)
│   └── index.ts
│
├── widgets/              # LAYER 3: WIDGETS (Tổ hợp UI độc lập)
│   ├── navbar/           # Header Navigation Bar
│   ├── hero/             # Hero Banner & Interactive Farm Card
│   ├── features-overview/# Overview Features Grid
│   ├── core-features/    # Core Capabilities Grid
│   ├── dashboard-cta/    # Dashboard Preview Showcase
│   ├── footer/           # Footer
│   └── index.ts
│
├── features/             # LAYER 4: FEATURES (Tương tác nghiệp vụ & hành vi người dùng)
│   ├── auth/             # Logic xác thực người dùng
│   │   ├── ui/           # LoginForm.tsx, SignupForm.tsx, Auth.css
│   │   ├── model/        # types.ts (LoginFormState, SignupFormState, StatusState)
│   │   └── index.ts
│
├── entities/             # LAYER 5: BUSINESS ENTITIES (Mô hình nghiệp vụ cốt lõi)
│   ├── user/             # Thực thể User
│   │   ├── model/        # types.ts (User model)
│   │   └── index.ts
│   └── (plot, sensor...)
│
├── shared/               # LAYER 6: SHARED INFRASTRUCTURE (Dùng chung không phụ thuộc domain)
│   ├── config/           # API_BASE_URL, hằng số cấu hình
│   ├── ui/               # UI Kit nguyên tử (Buttons, Inputs, Modals)
│   └── types/            # Types dùng chung
│
└── main.tsx              # React Entrypoint
```

---

## ⚙️ 2. Backend: Feature-Based / Modular Architecture

Backend (`apps/server/src`) được tổ chức theo mô hình **Feature-Based / Modular Architecture** thay vì Layered/MVC truyền thống. Toàn bộ logic liên quan đến một tính năng/domain được đóng gói hoàn toàn trong module đó.

### Cấu trúc thư mục:

```text
apps/server/src/
├── modules/                      # TẦNG TÍNH NĂNG ĐÓNG GÓI (MODULES / FEATURES)
│   ├── auth/                     # Module Xác thực (Authentication)
│   │   ├── auth.controller.ts    # Request & Response Handlers (signin, signup)
│   │   ├── auth.model.ts         # User Sequelize Model & Schema định nghĩa riêng
│   │   ├── auth.routes.ts        # Express Router (/signup, /signin)
│   │   ├── auth.types.ts         # DTOs & Interfaces (SignupDTO, SigninDTO, AuthResponse)
│   │   └── index.ts              # Export điểm vào của module
│   │
│   ├── (plots/)                  # Module Quản lý thửa đất (sắp tới)
│   └── (sensors/)                # Module IoT Sensors (sắp tới)
│
├── routes/                       # TỔ HỢP ĐỊNH TUYẾN TRUNG TÂM
│   └── index.ts                  # Gom tất cả module routers lại mount vào /api
│
├── middlewares/                  # GLOBAL MIDDLEWARES
│   └── authJwt.ts                # Middleware xác thực JWT token & kiểm tra quyền Admin
│
├── config/                       # GLOBAL CONFIGURATIONS
│   └── db.ts                     # Kết nối Sequelize ORM với SQL Server
│
├── types/                        # GLOBAL TYPE DECLARATIONS
│   └── declarations.d.ts         # Khai báo kiểu Express, JWT, Bcrypt
│
└── server.ts                     # Express Server Entry Point
```

---

## 🚀 3. Lợi ích Đạt được
1. **Dễ mở rộng (Scalability)**: Khi tạo tính năng mới (ví dụ: `plots`, `tasks`, `iot`), lập trình viên chỉ cần tạo module mới độc lập trong `modules/` (BE) và `features/` + `entities/` (FE) mà không sợ làm ảnh hưởng code cũ.
2. **Khắc phục xung đột (Merge Conflicts)**: Hạn chế xung đột mã nguồn khi nhiều thành viên làm việc song song trên các tính năng khác nhau.
3. **Dễ kiểm thử (Testability)**: Từng module, widget, feature có thể được viết Unit Test / Integration Test biệt lập.
