import { useEffect, useLayoutEffect, useState } from "react";
import { CardBaseType, CardIconType } from "./Card.types";

export const Base = ({ children }: CardBaseType) => {
  const [textFromInput, setTextFromInput] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 4) {
      alert("hoi counter!");
    }
  }, [counter]);

  const handleButtonClick = () => {
    setCounter((currentValue) => {
      return currentValue + 1;
    });
  };

  const handleInputChange = (e) => {
    setTextFromInput(e.target.value);
  };

  return (
    <div>
      <div>
        {textFromInput} - {counter}
      </div>
      <input value={textFromInput} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>klik mij</button>
      {children}
    </div>
  );
};

export const Icon = ({ iconName }: CardIconType) => {
  return <div>{iconName}</div>;
};

export default {
  Base,
  Icon
};
