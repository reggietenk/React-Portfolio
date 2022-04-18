import React from 'react';
import Nav from '../src/components/Nav'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
       <main>
         <About></About>
         <ContactForm></ContactForm>
         <Footer></Footer>
      </main>
    {/* <footer>
      <Footer></Footer>
    </footer> */}
    </div>
  );
}

export default App;