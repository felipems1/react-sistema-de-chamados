import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings } from "react-icons/fi";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>
      </div>
      <h1>Página perfil</h1>
    </div>
  );
};

export default Profile;
