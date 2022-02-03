import Head from "next/head";
import { Header } from "src/components/Header";
import { HyperLink } from "src/components/HyperLink";
import classes from "/src/styles/Home.module.css";
import clsx from "clsx";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useCallback, useEffect, useState } from "react";

export default function Login() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([1, 2, 3]);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じようそが存在しています");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  const ITEMS = [
    {
      id: 1,
      title: "今日する",
      classes: classes.today,
      input: classes.input,
    },
    {
      id: 2,
      title: "明日する",
      classes: classes.tomorrow,
      input: classes.input2,
    },
    {
      id: 3,
      title: "今度する",
      classes: classes.next,
      input: classes.input3,
    },
  ];

  return (
    <div>
      <Head>
        <title>TodoList</title>
      </Head>

      <Header />

      <main className={clsx("mt-10 w-screen", classes.main)}>
        <div className={clsx("pl-24 w-96 mx-auto")}>
          {count}
          {ITEMS.map((item) => {
            return (
              <div key={item.id}>
                <h1 className={clsx("mb-1", classes.font, item.classes)}>
                  {item.title}
                </h1>
                <button onClick={handleClick}>
                  <PlusCircleIcon
                    className={clsx("inline pb-1 w-6 text-gray-500")}
                  />
                </button>
                <input
                  className={clsx(
                    "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                    item.input
                  )}
                  id="inline-full-name"
                  type="text"
                  placeholder="タスクを追加する"
                  value={text}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </div>
      </main>

      {count}

      {isShow ? <HyperLink href="/login" name="login" /> : null}
      <button onClick={() => setIsShow((isShow) => !isShow)}>
        {isShow ? "表示" : "非表示"}
      </button>
      <ul>
        {array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>
      <button onClick={handleAdd}>追加</button>

      <HyperLink href="/" name="top" />
    </div>
  );
}
