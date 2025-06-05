import { useState } from "react";

const Counter = () => {
  enum Count {
    MAX_VALUE = 10,
    MIN_VALUE = 0,
  }

  const [count, setCount] = useState<number>(Count.MIN_VALUE);

  const handleIncreaseCount = () =>
    count < Count.MAX_VALUE ? setCount(() => count + 1) : null;

  const handleDecreaseCount = () =>
    count > Count.MIN_VALUE ? setCount(() => count - 1) : null;

  const handleReset = () => setCount(Count.MIN_VALUE);

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <div>
        <button onClick={handleIncreaseCount}>INCREASE</button>
        <button onClick={handleDecreaseCount}>DECREASE</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
