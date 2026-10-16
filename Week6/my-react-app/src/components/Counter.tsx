import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);  // start the memory at 0

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {
        count >=5 && 
        <p>Congratulations! You reached five!</p>
        // condition checking, then '&&' displays the message only when that condition is true
      }

    </>
  );
}

export default Counter;