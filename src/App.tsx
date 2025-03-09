import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ConfigProvider } from "antd";
import "./App.css";
import { getAntTheme } from "./lib/antdTheme";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const antTheme = getAntTheme(theme);

  return (
    <>
      <ConfigProvider theme={antTheme}>
        <ToastContainer />
        <AppRoutes toggleTheme={toggleTheme} />
      </ConfigProvider>
    </>
  );
}

export default App;
