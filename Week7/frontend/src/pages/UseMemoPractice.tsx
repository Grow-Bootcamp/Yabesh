import { useMemo, useState } from "react";

const UseMemoPractice = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num: number) => {
    console.log('Calculating...');

    let result = 0;

    for (let i = 0; i < 100000; i++) {
      result += num;
    }

    return result;
  };  

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(5);
  }, []);
  // make 5 -> count and [] -> [5] to learn expensiveness 

  return (
    <div>
      <h1>useMemo Practice</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <h3>Calculated Value: {calculatedValue}</h3>
    </div>
  );
};

export default UseMemoPractice;