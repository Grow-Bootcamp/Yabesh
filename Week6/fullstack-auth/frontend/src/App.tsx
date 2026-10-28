import { useState } from "react"; 
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [token, setToken] = useState(
    () => localStorage.getItem('token')
  );

  const user = JSON.parse(
    localStorage.getItem('user') || ('null')
  ) as { role: 'user' | 'admin' } | null;

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
  }

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