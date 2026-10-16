import { useState } from "react";

export type Fruit = {
  id: number;
  name: string;
};

export function useFruits() {
  const [fruits, setFruits] = useState<Fruit[]> ([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Mango' },
    { id: 4, name: 'Orange' },
  ]);

  const [newFruit, setNewFruit] = useState('');
  
  function addFruit() {
    if (newFruit.trim() === '') return; // ignore empty text

    setFruits(previousFruits => [
      ...previousFruits,
      {
        id: Date.now(),
        name: newFruit.trim(),
      },
    ]);

    setNewFruit('');  // clear the input box
  }

  function removeFruit(idToRemove: number) {
    setFruits(previousFruits => 
      previousFruits.filter(
        fruit => fruit.id !== idToRemove
      )
    );
  }

  return {
    fruits,
    newFruit,
    setNewFruit,
    addFruit,
    removeFruit,
  };
}