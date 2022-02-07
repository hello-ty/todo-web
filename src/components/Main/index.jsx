import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useReducer } from "react";

const initialState = {
  titleId: [0, 1, 2], // 0:今日する 1:明日する 2:今度する
  input: ["", "", ""], //input[0]:今日する input[1]:明日する input[2]:今度する
  outputToday: [""],
  outputTomorrow: [""],
  outputNext: [""],
};

const reducer = (state, action) => {
  switch (action.type) {
    // 入力
    case "input":
      switch (action.titleId) {
        case 0: // 今日する
          return {
            ...state,
            input: [action.input, state.input[1], state.input[2]],
          };
        case 1: // 明日する
          return {
            ...state,
            input: [state.input[0], action.input, state.input[2]],
          };
        case 2: // 今度する
          return {
            ...state,
            input: [state.input[0], state.input[1], action.input],
          };
      }
    // 出力
    case "output":
      switch (action.titleId) {
        case 0: // 今日する
          return {
            ...state,
            outputToday: [...state.outputToday, action.input],
            input: ["", state.input[1], state.input[2]], // 出力したらinputを空にする
          };
        case 1: // 明日する
          return {
            ...state,
            outputTomorrow: [...state.outputTomorrow, action.input],
            input: [state.input[0], "", state.input[2]],
          };
        case 2: // 今度する
          return {
            ...state,
            outputNext: [...state.outputNext, action.input],
            input: [state.input[0], state.input[1], ""],
          };
      }
    default:
      throw new Error("no such action type");
  }
};

export function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fontColor = [classes.today, classes.tomorrow, classes.next];
  const inputStyle = [classes.input, classes.input2, classes.input3];
  const title = ["今日する", "明日する", "今度する"];

  return (
    <>
      <main className={clsx("mt-10 w-screen", classes.main)}>
        <div className={clsx("pl-24 w-96 mx-auto")}>
          {state.titleId.map((item) => {
            return (
              <div key={item} className={clsx("mb-10")}>
                <h1 className={clsx("mb-1", classes.font, fontColor[item])}>
                  {title[item]}
                </h1>
                <button
                  onClick={() =>
                    dispatch({
                      type: "output",
                      titleId: item,
                      input: state.input[item],
                    })
                  }
                >
                  <PlusCircleIcon
                    className={clsx("inline pb-1 w-6 text-gray-500")}
                  />
                </button>
                <input
                  className={clsx(
                    "appearance-none border-2 border-white rounded-full py-2 px-4 ml-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                    fontColor[item],
                    inputStyle[item]
                  )}
                  type="text"
                  placeholder="タスクを追加する"
                  value={state.input[item]}
                  onChange={(e) =>
                    dispatch({
                      type: "input",
                      titleId: item,
                      input: e.target.value,
                    })
                  }
                />
                {item === 0
                  ? state.outputToday.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })
                  : item === 1
                  ? state.outputTomorrow.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })
                  : state.outputNext.map((item, i) => {
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
