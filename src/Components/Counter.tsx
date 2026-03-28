import { useState } from "react";

type CounterProps = {
  initialValue: number;
};

 const Counter = ({ initialValue }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Valeur : {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};


export default Counter;
