import { useReducer } from "react";

const ReducerImpl = () => {
  const initialValue = {
    count: 0,
    warning: "",
  };

  function callback(state, action) {
    switch (action.type) {
      case "INCREMENT":
        if (state.count >= 10) {
          return {
            ...state,
            count: state.count + 1,
            warning: "Go below 10",
          };
        }
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        if (state.count === 0) {
          return {
            ...state,
            count: state.count - 1,
            warning: "Go in positive range",
          };
        }
        return { ...state, count: state.count - 1 };
      default:
        return {
          ...state,
          count: 0,
          warning: "",
        };
    }
  }

  const [state, dispatch] = useReducer(callback, initialValue);

  return (
    <div>
      <p> {state.warning} </p>
      <br />
      <p>{state.count}</p>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ReducerImpl;
