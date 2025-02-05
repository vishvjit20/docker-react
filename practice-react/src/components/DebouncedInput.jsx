import { useState } from "react";
import useDebounce from "../hooks/use-debounced";

export const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const debouncedValue = useDebounce(inputText, 1000, () => {
    console.log("Function call");
  });
  console.log(debouncedValue);

  return (
    <div>
      <p>{debouncedValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type something ..."
        onChange={handleInputChange}
      />
    </div>
  );
};
