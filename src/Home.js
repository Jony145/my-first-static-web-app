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
        <p>{data}</p>
    </section>
  );

}

export default Home;