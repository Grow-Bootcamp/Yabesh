import { useState } from "react"; 
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import {logout as logoutService } from './services/authService';

function App() {
  const [token, setToken] = useState(
    () => localStorage.getItem('token')
  );

  const user = JSON.parse(
    localStorage.getItem('user') || ('null')
  ) as { role: 'user' | 'admin' } | null;

  const handleLogout = async() => {
    try {
      await logoutService();
    } catch (error) {
      console.error('Logout request failed: ', error);
    } finally {
      // clear local session even if the server request fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
    }
  };

  return (
    <div>
      <h1>Full-Stack Authentication</h1>
      
      {token ? (
        <>
          <Profile />
          {user?.role === 'admin' && <AdminDashboard />}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login onLogin={() => setToken(localStorage.getItem('token'))} />
      )}
    </div>
  );
}

export default App;