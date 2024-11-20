import React, { useState, useEffect } from "react";

interface CounterProps {
  target: number;
}

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // Total animation time in milliseconds
    const steps = 1000; // Number of updates
    const increment = Math.ceil(target / steps); // Increment per update
    const intervalTime = duration / steps; // Time between updates

    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= target) {
          clearInterval(interval); // Stop when the target is reached
          return target;
        }
        return nextValue; // Increment by the calculated amount
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup
  }, [target]);

  return (
    <div className="font-bold text-5xl font-vidaloka" >
      {count}
    </div>
  );
};

export default Counter;
