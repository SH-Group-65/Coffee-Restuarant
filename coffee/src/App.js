import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      
      <Footer />
      <div className=''>
        
      </div>
    </div>
  );
}

export default App;
