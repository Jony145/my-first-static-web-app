import React from 'react';
import Home from './Home';

function App() {


  return (
    <article className='App'>
      <nav className='Navbar'>
        <h1>Sectional property management App</h1>
        <ul>
          <a href='/'>Home</a>
          <a href='/Fines'>Fines</a>
        </ul>
      </nav>

      <section className='Page'><Home/></section>
      
    </article>

  );
}

export default App;