import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutContainer from './AboutUs/AboutContainer';
import TentangContainer from './Container/TentangContainer';
import HeaderContainer from './TemplatePage/Header/HeaderContainer';
import AdminContainer from './Admin/AdminContainer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/#header' exact element={<HeaderContainer/>}/>
      <Route path='/#tentangProgram' exact element={<TentangContainer/>}/>
      <Route path='/about-us' exact element={<AboutContainer/>}/>
      <Route path='/admin' exact element={<AdminContainer/>}/>
      <Route path='*' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
