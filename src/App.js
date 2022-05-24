//import logo from './logo.svg';
import './App.css';
import MenuList from './components/Navbar/MenuList';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About, Today, Upcoming, Filtersandlabel } from './components/Navbar/MenuList';
// import { useEffect} from 'react';
// import axios from 'axios';

function App() {

  // useEffect( () => {
  //   const resp = (async() => {
  //     const data = await axios.get('http://localhost:8080');
  //     console.log(data);
  //   })
  //   resp();
  // },[])
  return (
    <div className="flex flex-wrap">
      <Router>
        <Header />
        <MenuList />
        <div className='relative mt-12 w-[calc(100%-305px)]'>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Today />} />
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path='/filtersandlabel' element={<Filtersandlabel />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


