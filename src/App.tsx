import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      {/* setting up the dev branch */}
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
