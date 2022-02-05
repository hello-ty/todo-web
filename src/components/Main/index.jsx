import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useControllToday } from "src/hooks/useControllToday";
import { useControllNext } from "src/hooks/useControllNext";
import { useControllTomorrow } from "src/hooks/useControllTomorrow";

export function Main() {
  const { inputToday, displayToday, handleinputToday, handleAddToday } =
    useControllToday();
  const {
    inputTomorrow,
    displayTomorrow,
    handleinputTomorrow,
    handleAddTomorrow,
  } = useControllTomorrow();
  const { inputNext, displayNext, handleinputNext, handleAddNext } =
    useControllNext();

  const ITEMS = [
    {
      id: 1,
      title: "今日する",
      classes: classes.today,
      inputStyle: classes.input,
      inputText: inputToday,
      inputOnChange: handleinputToday,
      buttonOnClick: handleAddToday,
    },
    {
      id: 2,
      title: "明日する",
      classes: classes.tomorrow,
      inputStyle: classes.input2,
      inputText: inputTomorrow,
      inputOnChange: handleinputTomorrow,
      buttonOnClick: handleAddTomorrow,
    },
    {
      id: 3,
      title: "今度する",
      classes: classes.next,
      inputStyle: classes.input3,
      inputText: inputNext,
      inputOnChange: handleinputNext,
      buttonOnClick: handleAddNext,
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
                <button onClick={item.buttonOnClick}>
                  <PlusCircleIcon
                    className={clsx("inline pb-1 w-6 text-gray-500")}
                  />
                </button>
                <input
                  className={clsx(
                    "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                    item.classes,
                    item.inputStyle
                  )}
                  id="inline-full-name"
                  type="text"
                  placeholder="タスクを追加する"
                  value={item.inputText}
                  onChange={item.inputOnChange}
                />
                {item.id === 1
                  ? displayToday.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })
                  : item.id === 2
                  ? displayTomorrow.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })
                  : displayNext.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
