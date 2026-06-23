import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("cloudpay_token")
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("cloudpay_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function login(email: string, password: string) {
    const response = await api.post("/auth/login", { email, password });
    const { token, user } = response.data;

    localStorage.setItem("cloudpay_token", token);
    localStorage.setItem("cloudpay_user", JSON.stringify(user));

    setToken(token);
    setUser(user);
  }

  async function register(name: string, email: string, password: string) {
    await api.post("/auth/register", { name, email, password });
  }

  function logout() {
    localStorage.removeItem("cloudpay_token");
    localStorage.removeItem("cloudpay_user");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
