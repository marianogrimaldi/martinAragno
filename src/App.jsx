

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Triatlon from './Components/Triatlon/Triatlon';
import Taur from './Components/Taur/Taur';
import Mtb from './Components/Mtb/Mtb';
import Mountain from './Components/Mountain/Mountain';
import Meraki from './Components/Meraki/Meraki';
import Footer from './Components/Footer/Footer'
import SponPage from './Components/SponPage/SponPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Calendario from './Components/Calendario/Calendario';
import Otros from './Components/Otros/Otros';

import './App.css'

function App() {
 

  return (
    
      <BrowserRouter>
        <ScrollToTop/>
          <Header/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/triatlon" element={<Triatlon/>}/>
          <Route path="/taur" element={<Taur/>}/>
          <Route path="/mtb" element={<Mtb/>}/>
          <Route path="/mountain" element={<Mountain/>}/>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/meraki" element={<Meraki/>}/>
          <Route path="/sponsors" element={<SponPage/>}/>
          <Route path="/otros" element={<Otros/>}/>
          

          
          </Routes>
          <Footer/>
      </BrowserRouter>
      
  )
}

export default App
