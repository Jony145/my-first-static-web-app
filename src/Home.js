import React, { useState, useEffect } from 'react';

const Home = () => {

    const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <section>
        <h2>Homepage</h2>
        <p>{data}</p>
    </section>
  );

}

export default Home;