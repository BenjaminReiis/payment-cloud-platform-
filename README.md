<div align="center">

# 💳 CloudPay Platform
### Plataforma de Pagamentos em Cloud | Fullstack

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-licença)

**Uma plataforma completa de pagamentos em cloud, com autenticação, gerenciamento de clientes, criação de cobranças e dashboard financeiro.**

[Demonstração](#-demonstração) •
[Objetivo](#-objetivo-do-projeto) •
[Funcionalidades](#-funcionalidades) •
[Arquitetura](#%EF%B8%8F-arquitetura) •
[Stack](#-tecnologias-utilizadas) •
[Como Executar](#-como-executar)

</div>

---

## 🌐 Demonstração

| Recurso | Link |
|---|---|
| 🖥️ **Página do Projeto** | [benjaminreiis.github.io/payment-cloud-platform-](https://benjaminreiis.github.io/payment-cloud-platform-/) |
| 📦 **Repositório** | `github.com/benjaminreiis/payment-cloud-platform-` |

---

## 🎯 Objetivo do Projeto

O objetivo deste projeto é fornecer uma **base realista para uma plataforma de pagamentos moderna**, cobrindo o ciclo completo de um sistema de cobranças: do cadastro do usuário até a visualização de métricas financeiras.

Com a CloudPay Platform, é possível:

- 👤 Registrar usuários
- 🔐 Autenticar usuários
- 🧾 Cadastrar clientes
- 💰 Criar pagamentos
- 🔄 Atualizar status de pagamentos
- 📊 Visualizar métricas financeiras no dashboard

---

## ✨ Funcionalidades

| Funcionalidade | Status |
|---|---|
| Cadastro de usuário | ✅ |
| Login com JWT | ✅ |
| Proteção de rotas (middleware de autenticação) | ✅ |
| CRUD parcial de clientes | ✅ |
| CRUD parcial de pagamentos | ✅ |
| Dashboard com resumo financeiro | ✅ |
| Arquitetura separada entre frontend, backend e banco | ✅ |

> 📌 "CRUD parcial" indica que as operações essenciais (criar, listar, atualizar) estão implementadas; algumas operações complementares (ex: exclusão) podem estar no [roadmap](#%EF%B8%8F-roadmap).

---

## ⚙️ Tecnologias Utilizadas

### 🔧 Backend
| Tecnologia | Função |
|---|---|
| **Node.js** | Runtime de execução |
| **Express** | Framework HTTP para construção da API REST |
| **TypeScript** | Tipagem estática em todo o backend |
| **Prisma ORM** | Modelagem de dados e acesso ao PostgreSQL |
| **PostgreSQL** | Banco de dados relacional |
| **JWT** | Autenticação baseada em tokens |
| **Bcrypt** | Hash seguro de senhas |
| **Zod** | Validação de schemas e payloads |

### 🎨 Frontend
| Tecnologia | Função |
|---|---|
| **React** | Construção da interface |
| **Vite** | Build tool e dev server |
| **TypeScript** | Tipagem estática no frontend |
| **Axios** | Cliente HTTP para consumo da API |
| **React Router DOM** | Roteamento entre páginas |

### 🐳 Infraestrutura
| Tecnologia | Função |
|---|---|
| **Docker** | Containerização de backend e frontend |
| **Docker Compose** | Orquestração do ambiente completo (API + banco + frontend) |

---

## 🏗️ Arquitetura

```mermaid
flowchart LR
    A[Frontend React] --> B[API Node + Express]
    B --> C[(PostgreSQL)]
    B --> D[JWT Auth]
    B --> E[Prisma ORM]
    E --> C
```

| Camada | Responsabilidade |
|---|---|
| **Frontend (React + Vite)** | Interface de login, cadastro, dashboard e gestão de clientes/pagamentos |
| **Backend (Node + Express)** | API REST responsável pelas regras de negócio e autenticação |
| **Prisma ORM** | Camada de acesso a dados, type-safe, sobre o PostgreSQL |
| **PostgreSQL** | Persistência de usuários, clientes e pagamentos |
| **JWT Auth** | Middleware de proteção de rotas autenticadas |

---

## 📂 Estrutura do Projeto

```text
cloudpay-platform/
│
├─ backend/
│  ├─ prisma/
│  │  └─ schema.prisma           # Modelagem do banco (User, Customer, Payment)
│  ├─ src/
│  │  ├─ config/
│  │  │  └─ env.ts                # Carregamento e validação de variáveis de ambiente
│  │  ├─ middlewares/
│  │  │  └─ auth.ts               # Middleware de proteção de rotas (JWT)
│  │  ├─ routes/
│  │  │  ├─ auth.routes.ts        # Rotas de registro e login
│  │  │  ├─ customer.routes.ts    # Rotas de gerenciamento de clientes
│  │  │  ├─ payment.routes.ts     # Rotas de criação e atualização de pagamentos
│  │  │  └─ dashboard.routes.ts   # Rotas de métricas financeiras
│  │  ├─ services/
│  │  │  ├─ auth.service.ts       # Regras de negócio de autenticação
│  │  │  ├─ customer.service.ts   # Regras de negócio de clientes
│  │  │  ├─ payment.service.ts    # Regras de negócio de pagamentos
│  │  │  └─ dashboard.service.ts  # Cálculo de métricas do dashboard
│  │  ├─ lib/
│  │  │  └─ prisma.ts             # Instância singleton do Prisma Client
│  │  ├─ app.ts                    # Configuração da aplicação Express
│  │  └─ server.ts                 # Ponto de entrada (bootstrap do servidor)
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ .env.example
│  └─ Dockerfile
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ Navbar.tsx             # Barra de navegação
│  │  │  ├─ ProtectedRoute.tsx      # Wrapper de rotas autenticadas
│  │  │  └─ StatCard.tsx            # Card de métricas do dashboard
│  │  ├─ pages/
│  │  │  ├─ Login.tsx
│  │  │  ├─ Register.tsx
│  │  │  ├─ Dashboard.tsx
│  │  │  ├─ Customers.tsx
│  │  │  └─ Payments.tsx
│  │  ├─ services/
│  │  │  └─ api.ts                  # Instância Axios configurada
│  │  ├─ context/
│  │  │  └─ AuthContext.tsx          # Contexto global de autenticação
│  │  ├─ App.tsx
│  │  ├─ main.tsx
│  │  └─ index.css
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ vite.config.ts
│  ├─ .env.example
│  └─ Dockerfile
│
├─ docker-compose.yml
└─ README.md
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js 20+](https://nodejs.org/)
- [Docker](https://www.docker.com/) e Docker Compose
- [PostgreSQL](https://www.postgresql.org/) (caso não use Docker)

### 🐳 Opção 1 — Com Docker (recomendado)

```bash
git clone https://github.com/benjaminreiis/payment-cloud-platform-.git
cd cloudpay-platform

docker-compose up --build
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

### 💻 Opção 2 — Execução manual

**1. Clone o repositório**
```bash
git clone https://github.com/benjaminreiis/payment-cloud-platform-.git
cd cloudpay-platform
```

**2. Configure o backend**
```bash
cd backend
cp .env.example .env
npm install
```

```env
# backend/.env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cloudpay"
JWT_SECRET="troque-este-segredo-em-produção"
PORT=3000
```

```bash
npx prisma migrate dev
npm run dev
```

**3. Configure o frontend**
```bash
cd ../frontend
cp .env.example .env
npm install
```

```env
# frontend/.env
VITE_API_URL="http://localhost:3000"
```

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`, consumindo a API em `http://localhost:3000`.

---

## 📡 Visão Geral dos Endpoints

| Módulo | Método | Rota | Descrição | Autenticação |
|---|---|---|---|---|
| **Auth** | `POST` | `/auth/register` | Cadastra um novo usuário | ❌ |
| **Auth** | `POST` | `/auth/login` | Autentica e retorna o token JWT | ❌ |
| **Customers** | `POST` | `/customers` | Cadastra um novo cliente | ✅ |
| **Customers** | `GET` | `/customers` | Lista clientes cadastrados | ✅ |
| **Customers** | `GET` | `/customers/:id` | Consulta um cliente específico | ✅ |
| **Customers** | `PUT` | `/customers/:id` | Atualiza dados de um cliente | ✅ |
| **Payments** | `POST` | `/payments` | Cria uma nova cobrança | ✅ |
| **Payments** | `GET` | `/payments` | Lista pagamentos | ✅ |
| **Payments** | `PATCH` | `/payments/:id/status` | Atualiza o status de um pagamento | ✅ |
| **Dashboard** | `GET` | `/dashboard/summary` | Retorna o resumo financeiro | ✅ |

---

<details>
<summary><code>POST /auth/register</code> — Cadastrar usuário</summary>

```json
// Request
{
  "name": "Maria Souza",
  "email": "maria@email.com",
  "password": "senha-segura"
}
```
```json
// Response 201 Created
{
  "id": "usr_8f1a2b",
  "name": "Maria Souza",
  "email": "maria@email.com",
  "createdAt": "2026-06-29T10:00:00Z"
}
```
</details>

<details>
<summary><code>POST /auth/login</code> — Autenticação</summary>

```json
// Request
{
  "email": "maria@email.com",
  "password": "senha-segura"
}
```
```json
// Response 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "usr_8f1a2b",
    "name": "Maria Souza",
    "email": "maria@email.com"
  }
}
```
</details>

<details>
<summary><code>POST /customers</code> — Cadastrar cliente</summary>

> 🔐 Requer `Authorization: Bearer <token>`

```json
// Request
{
  "name": "Empresa XPTO Ltda",
  "email": "contato@xpto.com",
  "document": "12.345.678/0001-90"
}
```
```json
// Response 201 Created
{
  "id": "cust_3d9e7a",
  "name": "Empresa XPTO Ltda",
  "email": "contato@xpto.com",
  "document": "12.345.678/0001-90",
  "createdAt": "2026-06-29T10:05:00Z"
}
```
</details>

<details>
<summary><code>POST /payments</code> — Criar cobrança</summary>

> 🔐 Requer `Authorization: Bearer <token>`

```json
// Request
{
  "customerId": "cust_3d9e7a",
  "amount": 499.90,
  "description": "Mensalidade — Plano Pro",
  "dueDate": "2026-07-10"
}
```
```json
// Response 201 Created
{
  "id": "pay_4d9e7a",
  "customerId": "cust_3d9e7a",
  "amount": 499.90,
  "status": "PENDING",
  "dueDate": "2026-07-10",
  "createdAt": "2026-06-29T10:10:00Z"
}
```
</details>

<details>
<summary><code>PATCH /payments/:id/status</code> — Atualizar status do pagamento</summary>

> 🔐 Requer `Authorization: Bearer <token>`

```json
// Request
{
  "status": "PAID"
}
```
```json
// Response 200 OK
{
  "id": "pay_4d9e7a",
  "status": "PAID",
  "updatedAt": "2026-06-29T10:15:00Z"
}
```

**Status possíveis:** `PENDING` → `PAID` | `OVERDUE` | `CANCELED`
</details>

<details>
<summary><code>GET /dashboard/summary</code> — Resumo financeiro</summary>

> 🔐 Requer `Authorization: Bearer <token>`

```json
// Response 200 OK
{
  "totalReceived": 18540.00,
  "totalPending": 3200.00,
  "totalOverdue": 450.00,
  "customersCount": 12,
  "paymentsCount": 37
}
```
</details>

### Códigos de Status HTTP

| Código | Significado |
|---|---|
| `200` | Requisição bem-sucedida |
| `201` | Recurso criado com sucesso |
| `400` | Requisição inválida (erro de validação Zod) |
| `401` | Token ausente, inválido ou expirado |
| `404` | Recurso não encontrado |
| `409` | Conflito (ex: e-mail já cadastrado) |

---

## 🗄️ Modelagem de Dados (resumo)

```text
User (1) ──< cria >── (N) Customer
User (1) ──< cria >── (N) Payment
Customer (1) ──< possui >── (N) Payment
```

| Entidade | Campos principais |
|---|---|
| `User` | `id`, `name`, `email`, `password` (hash), `createdAt` |
| `Customer` | `id`, `name`, `email`, `document`, `userId`, `createdAt` |
| `Payment` | `id`, `customerId`, `amount`, `status`, `dueDate`, `createdAt` |

---

## 🔐 Segurança

- Senhas armazenadas exclusivamente com **hash Bcrypt**
- Autenticação via **JWT**, validada em middleware (`middlewares/auth.ts`)
- Validação de payloads de entrada com **Zod** em todas as rotas
- Variáveis sensíveis (segredo JWT, credenciais do banco) isoladas via `.env`

---

## 🗺️ Roadmap

- [ ] Exclusão de clientes e pagamentos (completar o CRUD)
- [ ] Filtros e paginação nas listagens
- [ ] Webhooks de atualização de status de pagamento
- [ ] Testes automatizados (Jest + Supertest)
- [ ] Deploy em produção (cloud)
- [ ] Pipeline de CI/CD com GitHub Actions

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 👨‍💻 Autor

**Benjamin Reis**

Backend & Fullstack — Node.js · TypeScript · React · PostgreSQL

[![GitHub](https://img.shields.io/badge/GitHub-benjaminreiis-181717?style=flat&logo=github&logoColor=white)](https://github.com/benjaminreiis)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório!

</div>
