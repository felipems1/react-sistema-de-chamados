import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesApp;
