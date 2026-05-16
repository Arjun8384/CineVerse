import { Outlet } from "react-router-dom";
import Header from "./Header";
import BackToTop from "./BackToTop";
import "./layout.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <BackToTop />
    </>
  );
};

export default AppLayout;