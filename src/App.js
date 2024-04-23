import React from 'react';
import Home from './Home';
import {  Route, Routes } from 'react-router-dom';

function App() {


  return (
      <article className='App'> 
      {/* above is the app which is an article */}

      {/* this is the navbar which is always there */}
        <nav className='Navbar'>
          <h1>Sectional property management App</h1>
          <ul className='Links'>
            <a href='/'>Home</a>
            <a href='/Fines'>Fines</a>
          </ul>
        </nav>

        {/* Bellow is the page content */}
        <section className='Page'>
          <Routes>
            <Route path='/' element={<Home></Home>}> 
            </Route>
          </Routes>
        </section>
        
      </article>
  );
}

export default App;