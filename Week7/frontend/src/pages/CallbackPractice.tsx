import { useCallback, useState } from "react"

const CallbackPractice = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Practice</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>
        Increment
      </button>

      <hr />

      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
};

export default CallbackPractice;