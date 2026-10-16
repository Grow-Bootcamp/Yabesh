import { useState } from "react";

function NameBox() {
  const [name, setName] = useState<string>('');

  return (
    <>
      <input 
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Type your name"
      />
      <p>Hello, {name || 'Stranger'}</p>
    </>
  );
}

export default NameBox;