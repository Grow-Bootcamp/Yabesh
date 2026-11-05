import useLocalStorage from "../hooks/useLocalStorage"

const LocalStoragePractice = () => {
  const [name, setName] = useLocalStorage<string>('username', '');

  return (
    <div>
      <h2>useLocalStorage Practice</h2>

      <input 
        type="text" 
        placeholder="Enter your name..."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <h3>Hello {name || 'Stranger'}</h3>

      <button onClick={() => setName('')}>
        Clear Name
      </button>

      <button onClick={() => setName('Yabesh')}>
        Change to Yabesh
      </button>
    </div>
  );
};

export default LocalStoragePractice;