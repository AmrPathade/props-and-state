import react from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Counter
      count={count}
      increase={() => setCount(count + 1)}
    />
  );
}

function Counter({ count, increase }) {
  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}
export default App;