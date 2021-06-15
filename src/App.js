import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav'
import About from './components/about/about'
import Carousel from './components/carousel/carousel'
import Pizzatypes from './components/pizzatypes/pizzatypes'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Nav/>
    <Carousel/>
    <About/>
    <Pizzatypes/>
    <Footer/>
    </>
  );
}

export default App;
//react-scripts build
