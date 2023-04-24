
import { useSelector, useDispatch } from "react-redux";
import React,{ useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const list = useSelector((state) => state);
  console.log(list, "data from redux reducer");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: value });
          setValue("");
        }}
      >
        ADD
      </button>
      {list.map((x) => (
        <div key={x.id}>
          <p>{x.task}</p>
          <button onClick={() => dispatch({ type: "DELETE_TODO", payload: x })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
