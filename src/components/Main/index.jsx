import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useCallback, useEffect } from "react";
import { HyperLink } from "/src/components/HyperLink/";

export function Main() {
  const foo = 1;

  const handleClick = useCallback(() => {
    alert(foo);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  const ITEMS = [
    {
      h1: (
        <h1 className={clsx("mb-1", classes.font, classes.today)}>今日する</h1>
      ),
      input: (
        <input
          className={clsx(
            "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
            classes.input
          )}
          id="inline-full-name"
          type="text"
          placeholder="タスクを追加する"
        />
      ),
    },
    {
      h1: (
        <h1 className={clsx("mb-1", classes.font, classes.tomorrow)}>
          明日する
        </h1>
      ),
      input: (
        <input
          className={clsx(
            "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
            classes.input2
          )}
          id="inline-full-name"
          type="text"
          placeholder="タスクを追加する"
        />
      ),
    },
    {
      h1: (
        <h1 className={clsx("mb-1", classes.font, classes.next)}>今度する</h1>
      ),
      input: (
        <input
          className={clsx(
            "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
            classes.input3
          )}
          id="inline-full-name"
          type="text"
          placeholder="タスクを追加する"
        />
      ),
    },
  ];

  return (
    <>
      <main className={clsx("mt-10 w-screen", classes.main)}>
        <div className={clsx("pl-24 w-96 mx-auto")}>
          {ITEMS.map((item) => {
            return (
              <div key={item.h1}>
                {item.h1}
                <button onClick={handleClick}>
                  <PlusCircleIcon
                    className={clsx("inline pb-1 w-6 text-gray-500")}
                  />
                </button>
                {item.input}
              </div>
            );
          })}
        </div>
      </main>

      <HyperLink href="login" name="login" />
    </>
  );
}
