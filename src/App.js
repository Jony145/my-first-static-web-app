import React, { useState, useEffect } from 'react';
import Home from './Home';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div>
    <div>{data}</div>
    <Home/>
    </div>

  );
}

export default App;