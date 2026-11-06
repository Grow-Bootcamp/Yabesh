import { useCallback, useState } from "react";
import CallbackChild from "../components/CallbackChild";

const UseCallbackPractice = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Practice</h1>

      <h2>Counter: {count}</h2>

      <CallbackChild onIncrement={handleIncrement} />
    </div>
  );
};

export default UseCallbackPractice;