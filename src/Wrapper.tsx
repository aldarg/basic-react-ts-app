import React, { useState } from 'react';
import App from './App';

const Wrapper = () => {
  const [shouldShow, setShouldShow] = useState(true);

  return (
    <div>
      {shouldShow && <App />}
      <button type="button" onClick={() => setShouldShow(false)}>
        Hide
      </button>
      <button type="button" onClick={() => setShouldShow(true)}>
        Show
      </button>
    </div>
  );
};

export default Wrapper;
