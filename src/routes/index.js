import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SingUp />} />
    </Routes>
  );
};

export default RoutesApp;
