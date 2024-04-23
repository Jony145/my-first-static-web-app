import React from 'react';
import Home from './Home';
import Fines from './Fines'
import { Link, Route, Routes } from 'react-router-dom';

function App() {


  return (
      <article className='App'> 
      {/* above is the app which is an article */}

      {/* this is the navbar which is always there */}
        <nav className='Navbar'>
          <h1>Sectional property management App</h1>
          <ul className='Links'>
            <Link to='/'>Home</Link>
            <Link to='/Fines'>Fines</Link>
          </ul>
        </nav>

        {/* Bellow is the page content */}
        <section className='Page'>
          <Routes>
            <Route path='/' element={<Home></Home>}>
            </Route>
            <Route path='/Fines' element={<Fines/>}>
            </Route>
          </Routes>
        </section>
        
      </article>
  );
}

export default App;