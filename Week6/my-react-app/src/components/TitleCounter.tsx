import { useState, useEffect } from 'react';

function TitleCounter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;

    console.log('Count changed: ', count);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick = {() => setCount(count+1)}>
        Click me
      </button>
    </>
  );
}

export default TitleCounter;