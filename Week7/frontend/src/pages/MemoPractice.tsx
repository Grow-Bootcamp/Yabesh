import { useState } from "react";
import MemoChild from "../components/MemoChild";

const MemoPractice = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React Student');

  console.log('MemoPractice Rendered');

  return (
    <div>
      <h1>React.memo Practice</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <hr />

      <MemoChild name={name} />

      <button onClick={() => setName("TypeScript Student")}>
        Change Name
      </button>
    </div>
  );
};

export default MemoPractice;