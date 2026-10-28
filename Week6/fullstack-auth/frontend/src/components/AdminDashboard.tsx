import { useState } from "react";
import { getAdminData } from "../services/protectedService";

function AdminDashboard() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  async function checkAdminAccess() {
    setResult('');
    setError('');

    try {
      const data = await getAdminData();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Request failed'
      );
    }
  }

  return (
    <section>
      <h2>Admin Dashboard</h2>
      <button onClick={checkAdminAccess}>
        Check Admin Access
      </button>

      {result && <pre>{result}</pre>}
      {error && <p>{error}</p>}
    </section>
  );
}

export default AdminDashboard;