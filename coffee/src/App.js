import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <div className=''>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Product />
      </div>
    </div>
  );
}

export default App;
