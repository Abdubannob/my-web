import { Routes, Route } from "react-router-dom"
import './App.css';
import  Header  from './components/header/Header';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Prefooter from "./components/footer/Prefooter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header/>
   
    
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
      </Routes>
   
   
    <Prefooter/>
    <Footer/>
    </div>
    
  );
}

export default App;
