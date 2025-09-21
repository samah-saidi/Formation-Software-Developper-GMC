import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "../Redux/actions";

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const filteredTasks =
    filter === "done"
      ? tasks.filter((t) => t.isDone)
      : filter === "not"
      ? tasks.filter((t) => !t.isDone)
      : tasks;

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>Tous</button>
        <button onClick={() => dispatch(setFilter("done"))}>Faits</button>
        <button onClick={() => dispatch(setFilter("not"))}>Non faits</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;