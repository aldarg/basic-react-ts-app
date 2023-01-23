import React, { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log('mount');
    return () => console.log('dismounting ', counter);
  }, []);

  return (
    <div>
      <button type="button" onClick={increment}>
        Click
      </button>
      <div>{counter}</div>
    </div>
  );
};

export default App;
