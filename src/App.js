import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  return (
    <Router>
      {/* Bellow is the app which is an article */}
      <article className='App'> 
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
          <Switch>
            <Route path='/'> 
              <Home></Home>
            </Route>
          </Switch>
        </section>
        
      </article>
    </Router>
  );
}

export default App;