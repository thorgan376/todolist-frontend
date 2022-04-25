//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {About, Today, Upcoming, Filtersandlabel} from './components/Navbar/Navbar';

function App() {
  return (
    <div className="flex flex-wrap">
      <Router>
      <Header/>
      <Navbar/>
      <div className='relative mt-12 basis-4/5 bg-white h-screen'>
      <Routes>
        <Route path='/about'element={<About/>}/>
        <Route path='/'element={<Today/>}/>
        <Route path='/upcoming'element={<Upcoming/>}/>
        <Route path='/filtersandlabel'element={<Filtersandlabel/>}/>
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
