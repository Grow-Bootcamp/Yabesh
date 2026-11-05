import { useMemo, useState } from "react";

const PriceCalculator = () =>{
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);

  const total = useMemo(() => {
    console.log('Calculating total...');

    return price * quantity;
  }, [price, quantity]);

  return (
    <div>
      <h2>Price Calculator</h2>

      <input 
        type="number" 
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
      />

      <input 
        type="number" 
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />

      <h3>Total: {total}</h3>
    </div>
  );
};

export default PriceCalculator;