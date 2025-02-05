import { useEffect, useRef } from "react";
import "./App.css";
import IntersectionElement from "./components/IntersectionElement";
import Context from "./components/ContextAPI";
import ReducerImpl from "./components/ReducerImpl";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const props = {
    name: "Vishwajeet Singh Kushwah",
    age: 25,
    worksAt: "Samsung",
  };
  return (
    <Context.Provider value={props}>
      {/* <Counter /> */}
      {/* <WindowSize /> */}
      {/* <PostLists /> */}
      {/* <DebouncedInput /> */}
      <ReducerImpl />
      <input ref={inputRef} />
      <IntersectionElement />
    </Context.Provider>
  );
}

export default App;
