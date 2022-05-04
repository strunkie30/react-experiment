import { useState, useTransition } from "react";

export function Transition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    function handleClick() {
      startTransition(() => {
        setCount(c => c + 2);
      })
    }
  
    return (
      <div>
        {isPending && <div>loading</div>}
        <button onClick={handleClick}>{count}</button>
      </div>
    );
  }
  