import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/UI/Layout";

interface AppProps {
  toggleTheme: () => void;
  theme: string;
}

const AppRoutes = ({ toggleTheme, theme }: AppProps) => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} theme={theme} />}
      >
        <Route index element={<Home title="This is our homepage" />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
