import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>Página Dashboard</h1>
      <button onClick={handleLogout}>Sair da conta</button>
    </div>
  );
};

export default Dashboard;
