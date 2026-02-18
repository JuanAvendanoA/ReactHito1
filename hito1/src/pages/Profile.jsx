import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, getProfile, logout } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button className="btn btn-danger" onClick={() => logout()}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
