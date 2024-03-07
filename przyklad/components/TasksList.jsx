import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasks/operations";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { selectAllTasks, selectLoading } from "../redux/tasks/selectors";
import Helmet from "react-helmet";

export default function TasksList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const items = useSelector(selectAllTasks);
  console.log(items);
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TaskForm />
      {items?.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      {isLoading && <p>loading...</p>}
    </div>
  );
}
