import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/modal-demo">Modal Demo</NavLink>

    </nav>
  );
}

export default NavBar;