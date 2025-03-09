import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  toggleTheme: () => void;
}
const Layout = ({ toggleTheme }: LayoutProps) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
