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
