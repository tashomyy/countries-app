import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  toggleTheme: () => void;
}
const Layout = ({ toggleTheme }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
