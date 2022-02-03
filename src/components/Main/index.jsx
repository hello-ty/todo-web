import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useCallback, useEffect, useState } from "react";
import { HyperLink } from "/src/components/HyperLink/";

export function Main() {
  const [todaytext, setTodayText] = useState("");
  const [tomorrowtext, setTomorrowText] = useState("");
  const [nexttext, setNextText] = useState("");
  const [todaycount, setTodayCount] = useState([]);
  const [tomorrowcount, setTomorrowCount] = useState([]);
  const [nextcount, setNextCount] = useState([]);

  const [today, setToday] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  const [next, setNext] = useState([]);

  const handleTodayText = useCallback(
    (e) => {
      setTodayText(e.target.value);
    },
    [todaytext]
  );

  const handleTomorrowText = useCallback(
    (e) => {
      setTomorrowText(e.target.value);
    },
    [tomorrowtext]
  );

  const handleNextText = useCallback(
    (e) => {
      setNextText(e.target.value);
    },
    [nexttext]
  );

  const handleAddToday = useCallback(
    (e) => {
      setTodayCount((prevCount) => {
        const newArray = [...prevCount, todaytext];
        return newArray;
      });
      setToday((prevCount) => {
        const newArray2 = [...prevCount, todaytext];
        return newArray2;
      });
      setTodayText("");
    },
    [todaycount, today, todaytext]
  );

  const handleAddTomorrow = useCallback(
    (e) => {
      setTomorrowCount((prevCount) => {
        const newArray = [...prevCount, tomorrowtext];
        return newArray;
      });
      setTomorrow((prevCount) => {
        const newArray2 = [...prevCount, tomorrowtext];
        return newArray2;
      });
      setTomorrowText("");
    },
    [tomorrowcount, tomorrow, tomorrowtext]
  );

  const handleAddNext = useCallback(
    (e) => {
      setNextCount((prevCount) => {
        const newArray = [...prevCount, nexttext];
        return newArray;
      });
      setNext((prevCount) => {
        const newArray3 = [...prevCount, nexttext];
        return newArray3;
      });
      setNextText("");
    },
    [nextcount, next, nexttext]
  );

  const ITEMS = [
    {
      id: 1,
      title: "今日する",
      classes: classes.today,
      input: classes.input,
      text: todaytext,
      func: handleTodayText,
      funccount: handleAddToday,
      count: todaycount,
      eee: today,
    },
    {
      id: 2,
      title: "明日する",
      classes: classes.tomorrow,
      input: classes.input2,
      text: tomorrowtext,
      func: handleTomorrowText,
      funccount: handleAddTomorrow,
      count: tomorrowcount,
      eee: tomorrow,
    },
    {
      id: 3,
      title: "今度する",
      classes: classes.next,
      input: classes.input3,
      text: nexttext,
      func: handleNextText,
      funccount: handleAddNext,
      count: nextcount,
      eee: next,
    },
  ];

  return (
    <>
      <main className={clsx("mt-10 w-screen", classes.main)}>
        <div className={clsx("pl-24 w-96 mx-auto")}>
          {ITEMS.map((item) => {
            return (
              <div key={item.id} className={clsx("mb-10")}>
                <h1 className={clsx("mb-1", classes.font, item.classes)}>
                  {item.title}
                </h1>
                <button onClick={item.funccount}>
                  <PlusCircleIcon
                    className={clsx("inline pb-1 w-6 text-gray-500")}
                  />
                </button>
                <input
                  className={clsx(
                    "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                    item.classes,
                    item.input
                  )}
                  id="inline-full-name"
                  type="text"
                  placeholder="タスクを追加する"
                  value={item.text}
                  onChange={item.func}
                />
                {item.id === 1
                  ? item.count.map((item, i) => {
                      return <p key={item}>{today[i]}</p>;
                    })
                  : item.id === 2
                  ? item.count.map((item, i) => {
                      return <p key={item}>{tomorrow[i]}</p>;
                    })
                  : item.count.map((item, i) => {
                      return <p key={item}>{next[i]}</p>;
                    })}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
