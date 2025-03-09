import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ConfigProvider } from "antd";
import "./App.css";

function App() {
  const { theme, toggleTheme, antTheme } = useContext(ThemeContext);

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
