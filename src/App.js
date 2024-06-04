import './App.css';
import Aboutus from './components/Aboutus';
import Conatctus from './components/Conatctus';
import Footer from './components/Footer';
import Home from './components/Home';

import Navabar from './components/Navabar';
import System from './components/System';
import Login from './components/signupLogin pages/Login';
import Signup from './components/signupLogin pages/Signup';
import {BrowserRouter , Routes , Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    
      <Navabar />
      <Routes>
        <Route path="/Home" Component={Home}/>
        <Route path='/about' Component={Aboutus}/>
        <Route path="/system" Component={System}/>
        <Route path="/contactus" Component={Conatctus}/>
        

      
   
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    
  )
}

export default App;
