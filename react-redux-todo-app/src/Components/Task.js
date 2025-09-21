import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../Redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask(task.id, newText));
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Valider</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </span>
          <a href="#" onClick={() => setIsEditing(true)}>📝</a>
        </>
      )}
    </div>
  );
};

export default Task;