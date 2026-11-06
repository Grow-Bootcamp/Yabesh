import { memo } from "react";

interface MemoChildProps {
  name: string;
}

const MemoChild = ({ name }: MemoChildProps) => {
  console.log('MemoChild rendered');

  return (
    <div>
      <h3>Hello, {name}!</h3>
    </div>
  );
};

export default memo(MemoChild);