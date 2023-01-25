import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import Private from "./Private";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
