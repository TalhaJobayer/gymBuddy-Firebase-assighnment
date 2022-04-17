
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/SharedPage/Header/Header'

import Footer from './Component/SharedPage/Footer/Footer'
import Resister from './Component/Register/Register'
import Login from './Component/Login/Login'
import MainBody from './Component/MainBody/MainBody';
 
function App() {
  return (
    <div className="App">
     <Header></Header>
     
     <Routes>
       <Route path='/MainBody' element={<MainBody></MainBody>}></Route>
       <Route path='/Register' element={<Resister></Resister>}></Route>
       <Route path='/Login' element={<Login></Login>}></Route>
     </Routes>
   
     <Footer></Footer>
    </div>
  );
}

export default App;
