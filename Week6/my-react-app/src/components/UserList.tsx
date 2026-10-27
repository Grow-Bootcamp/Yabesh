import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error ('Could not load users');
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unexpected error occurred';

        setError(message);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  if (loading) {
    return <h2>Loading users.....</h2>
  }

  if (error) {
    return <p>Something went wrong: {error}</p>
  }

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </>
  );

}

export default UserList; 

