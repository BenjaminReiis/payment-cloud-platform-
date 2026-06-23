import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div>
        <strong>CloudPay</strong>
      </div>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Clientes</Link>
        <Link to="/payments">Pagamentos</Link>
        <button onClick={handleLogout}>Sair</button>
        <span>{user?.name}</span>
      </div>
    </nav>
  );
}
