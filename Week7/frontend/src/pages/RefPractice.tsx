import { useRef } from "react"

const RefPractice = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>useRef Practice</h2>

      <input 
        ref={inputRef}
        type="text" 
        placeholder="Enter something..."
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
};

export default RefPractice;