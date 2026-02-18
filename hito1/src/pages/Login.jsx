import { useState } from "react";
import { useUser } from "../context/UserContext"; // Importamos el hook de UserContext
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser(); // Usamos el hook para acceder al método login
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await login(email, password); // Llamamos al método login del UserContext
      alert("Login exitoso");
      navigate("/profile");
    } catch (error) {
      alert("Error en login, intente nuevamente");
    }
  };

  return (
    <div className="card p-4 shadow" style={{ width: "350px" }}>
      <h2 className="text-center mb-3">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-dark w-100">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
