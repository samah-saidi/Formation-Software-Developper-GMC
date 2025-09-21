import React from "react";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import './App.css';
const App = () => {
  return (
   <div className="App">
      <header className="App-header">
      <h1>📝 ToDo App Redux</h1>
      <AddTask />
      <ListTask />
     </header> 
    </div>
  );
};

export default App;