import useCounter from "../hooks/useCounter"

const CounterOne = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h3>Counter One</h3>

      <p>Count: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const CounterTwo = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h3>Counter Two</h3>

      <p>Count: {count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const CustomHookPractice = () => {
  return (
    <div>
      <h2>Custom Hook Practice</h2>

      <CounterOne />

      <hr />

      <CounterTwo />
    </div>
  );
};

export default CustomHookPractice;