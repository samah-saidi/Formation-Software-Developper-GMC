import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask({ id: uuidv4(), description: text, isDone: false }));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Ajouter une tâche"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default AddTask;