import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;