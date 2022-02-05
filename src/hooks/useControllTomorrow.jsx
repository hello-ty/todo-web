import { useCallback, useState } from "react";

export const useControllTomorrow = () => {
  const [inputTomorrow, setInputTomorrow] = useState("");
  const [displayTomorrow, setDisplayTomorrow] = useState([]);
  const handleinputTomorrow = useCallback(
    (e) => {
      setInputTomorrow(e.target.value);
    },
    [inputTomorrow]
  );
  const handleAddTomorrow = useCallback(
    (e) => {
      setDisplayTomorrow((prevCount) => [...prevCount, inputTomorrow]);
      setInputTomorrow("");
    },
    [displayTomorrow, inputTomorrow]
  );
  return {
    inputTomorrow,
    displayTomorrow,
    handleinputTomorrow,
    handleAddTomorrow,
  };
};
