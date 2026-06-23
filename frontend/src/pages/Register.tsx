import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await register(name, email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao registrar");
    }
  }

  return (
    <div className="auth-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        {error && <p className="error">{error}</p>}
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <p>
          Ja tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
}
