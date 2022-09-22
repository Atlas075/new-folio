import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  const [works] = useState([
    {
      name: 'Valhalla',
      description: 'A collection of my projects',
    },
    {
      name: 'Resume',
      description: 'A collection of my job history',
    },


  ])

  const [currentCategory, setCurrentCategory] = useState(works[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        works={works}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            
            <About></About>
            <Work></Work>
            <Resume></Resume>
            <ContactForm></ContactForm>
            <Footer></Footer>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
