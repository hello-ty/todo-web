import { useCallback, useState } from "react";

export const useControllToday = () => {
  const [inputToday, setInputToday] = useState("");
  const [displayToday, setDisplayToday] = useState([]);
  const handleinputToday = useCallback(
    (e) => {
      setInputToday(e.target.value);
    },
    [inputToday]
  );

  const handleAddToday = useCallback(
    (e) => {
      setDisplayToday((prevCount) => [...prevCount, inputToday]);
      setInputToday("");
    },
    [displayToday, inputToday]
  );

  return { inputToday, displayToday, handleinputToday, handleAddToday };
};
