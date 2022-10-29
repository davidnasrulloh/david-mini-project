import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutContainer from './pages/AboutUs/AboutContainer';
import TentangContainer from './container/TentangContainer';
import HeaderContainer from './templatePage/Header/HeaderContainer';
import AdminContainer from './pages/Admin/AdminContainer';
import PromoContainer from './container/PromoContainer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/#header' exact element={<HeaderContainer/>}/>
      <Route path='/#tentangProgram' exact element={<TentangContainer/>}/>
      <Route path='/#promo' exact element={<PromoContainer/>}/>
      <Route path='/about-us' exact element={<AboutContainer/>}/>
      <Route path='/admin' exact element={<AdminContainer/>}/>
      <Route path='*' exact element={<Home/>}/>
    </Routes>
  );
}

export default App;
