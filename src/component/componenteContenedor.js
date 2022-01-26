import { useState } from "react";
import Button from "./Button";

export function ComponenteContenedor() {
  const [count, setCount] = useState(0);

  const handlerCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <Button onClick={handlerCount}> Aumentar</Button>
    </div>
  );
}
