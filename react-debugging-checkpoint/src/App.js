// App.js
import React, { useState } from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0);
  const user = { name: 'Alice', age: 30 };

  return (
    <div>
      <h1>Debug Checkpoint App</h1>
      <Counter count={count} setCount={setCount} />
      <Profile user={user} />
    </div>
  );
}

export default App;
