import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(email, password);
      alert("Registro exitoso!");
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("Error al registrar: " + err.message);
    }
  };

  return (
    <div className="card p-4 shadow" style={{ width: "350px" }}>
      <h2 className="text-center mb-4">Registro</h2>

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

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
