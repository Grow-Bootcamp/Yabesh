import { useState, useEffect } from 'react';

function ClockFunction() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log('Mounted: start the timer');

    const timerId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Unmounting: stop the timer');
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h2>The time is {time.toLocaleTimeString()}</h2>
    </>
  );
}

export default ClockFunction;