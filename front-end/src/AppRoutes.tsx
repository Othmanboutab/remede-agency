import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";

const AppRoutes: React.FC = () => {
  const logged = useSelector((state: any) => state?.authReducer?.user?.logged);

  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            logged || token ? <Dashboard /> : <Navigate to="/signIn" replace />
          }
        />
        <Route
          path="/signIn"
          element={
            logged || token ? <Navigate to="/dashboard" replace /> : <SignIn />
          }
        />
        <Route
          path="/transactions"
          element={
            logged || token ? (
              <Transactions />
            ) : (
              <Navigate to="/signIn" replace />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
