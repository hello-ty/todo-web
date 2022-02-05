import { useCallback, useState } from "react";

export const useControllNext = () => {
  const [inputNext, setInputNext] = useState("");
  const [displayNext, setDisplayNext] = useState([]);
  const handleinputNext = useCallback(
    (e) => {
      setInputNext(e.target.value);
    },
    [inputNext]
  );
  const handleAddNext = useCallback(
    (e) => {
      setDisplayNext((prevCount) => [...prevCount, inputNext]);
      setInputNext("");
    },
    [displayNext, inputNext]
  );
  return { inputNext, displayNext, handleinputNext, handleAddNext };
};
