

function App() {
  let data;

  
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      data = text;
    })();


  return (
    <div>{data}</div>
  );
}

export default App;