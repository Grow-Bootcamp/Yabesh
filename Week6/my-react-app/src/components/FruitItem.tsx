type FruitItemProps = {
  name: string;
  onDelete: () => void;
};

function FruitItem ({name, onDelete}: FruitItemProps) {
  return (
    <li>
      {name} <button onClick={onDelete}>Remove</button>
    </li>
  );
}

export default FruitItem;