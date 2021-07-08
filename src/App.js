import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <p>recoilののチュートリアルの練習用ファイルです。</p>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
