import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutContainer from './AboutUs/AboutContainer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about-us' exact element={<AboutContainer/>}/>
    </Routes>
  );
}

export default App;
