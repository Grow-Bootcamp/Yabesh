import { memo } from "react";

interface CallbackChildProps {
  onIncrement: () => void;
}

const CallbackChild = ({ onIncrement }: CallbackChildProps) => {
  console.log('CallbackChild rendered');

  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );
};

export default memo(CallbackChild);