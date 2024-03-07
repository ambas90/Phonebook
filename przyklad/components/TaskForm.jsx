import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks/operations";

export default function TaskForm() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add task: <br />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
    </form>
  );
}
