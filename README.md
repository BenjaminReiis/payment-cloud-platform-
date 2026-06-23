# CloudPay Platform

Plataforma completa de pagamentos em cloud com autenticação, gerenciamento de clientes, criação de cobranças e dashboard financeiro.

---

## Tecnologias utilizadas

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- Bcrypt
- Zod

### Frontend
- React
- Vite
- TypeScript
- Axios
- React Router DOM

### Infraestrutura
- Docker
- Docker Compose

---

## Objetivo do projeto

O objetivo deste projeto é fornecer uma base realista para uma plataforma de pagamentos moderna.

Com ele, é possível:

- registrar usuários
- autenticar usuários
- cadastrar clientes
- criar pagamentos
- atualizar status de pagamentos
- visualizar métricas financeiras no dashboard

---

## Funcionalidades

- Cadastro de usuário
- Login com JWT
- Proteção de rotas
- CRUD parcial de clientes
- CRUD parcial de pagamentos
- Dashboard com resumo
- Arquitetura separada entre frontend, backend e banco

---

## Estrutura do projeto

```text
cloudpay-platform/
├─ backend/
├─ frontend/
├─ docker-compose.yml
└─ README.md

flowchart LR
    A[Frontend React] --> B[API Node Express]
    B --> C[PostgreSQL]
    B --> D[JWT Auth]
    B --> E[Prisma ORM]


cloudpay-platform/
├─ backend/
│  ├─ prisma/
│  │  └─ schema.prisma
│  ├─ src/
│  │  ├─ config/
│  │  │  └─ env.ts
│  │  ├─ middlewares/
│  │  │  └─ auth.ts
│  │  ├─ routes/
│  │  │  ├─ auth.routes.ts
│  │  │  ├─ customer.routes.ts
│  │  │  ├─ payment.routes.ts
│  │  │  └─ dashboard.routes.ts
│  │  ├─ services/
│  │  │  ├─ auth.service.ts
│  │  │  ├─ customer.service.ts
│  │  │  ├─ payment.service.ts
│  │  │  └─ dashboard.service.ts
│  │  ├─ lib/
│  │  │  └─ prisma.ts
│  │  ├─ app.ts
│  │  └─ server.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ .env.example
│  └─ Dockerfile
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ ProtectedRoute.tsx
│  │  │  └─ StatCard.tsx
│  │  ├─ pages/
│  │  │  ├─ Login.tsx
│  │  │  ├─ Register.tsx
│  │  │  ├─ Dashboard.tsx
│  │  │  ├─ Customers.tsx
│  │  │  └─ Payments.tsx
│  │  ├─ services/
│  │  │  └─ api.ts
│  │  ├─ context/
│  │  │  └─ AuthContext.tsx
│  │  ├─ App.tsx
│  │  ├─ main.tsx
│  │  └─ index.css
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ vite.config.ts
│  ├─ .env.example
│  └─ Dockerfile
├─ docker-compose.yml
└─ README.md


