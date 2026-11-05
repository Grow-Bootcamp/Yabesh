import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

const FetchPractice = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  
  if (loading) <p>Loading users...</p>;
  if(error) <p>Error: {error}</p>

  return (
    <div>
      <h2>useFetchPractice</h2>

      {users?.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchPractice;