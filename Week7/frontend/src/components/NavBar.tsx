import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { logoutRequest } from "../services/api";
import { useAppSelector } from "../store/hooks";

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();


  // read cart items from the Redux store
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  // calculate the total quantity of products
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = async () => {
    try {
      await logoutRequest();
    } catch (error) {
      console.error('Logout request failed: ', error);
    } finally {
      logout();
      navigate('/login', { replace: true });
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/modal-demo">Modal Demo</NavLink>
      <NavLink to="/cart">Cart ({cartCount})</NavLink>
      <NavLink to="/todos">Todos</NavLink>

      {!isAuthenticated ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <>
          <NavLink to="/profile">Profile</NavLink>

          {user?.role === 'admin' && (
            <NavLink to="/admin">Admin Dashboard</NavLink>
          )}

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      )      
      }
    </nav>
  );
};

export default NavBar;