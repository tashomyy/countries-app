import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  toggleTheme: () => void;
  theme: string;
}
const Layout = ({ toggleTheme, theme }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="tw-px">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
