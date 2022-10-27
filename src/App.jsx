import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutContainer from './AboutUs/AboutContainer';
import TentangContainer from './Container/TentangContainer';
import Header from './TemplatePage/Header/HeaderContainer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/#header' exact element={<Header/>}/>
      <Route path='/#tentangProgram' exact element={<TentangContainer/>}/>
      <Route path='/about-us' exact element={<AboutContainer/>}/>
      <Route path='*' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
