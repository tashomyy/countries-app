import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/UI/Layout";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home title="This is our homepage" />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
