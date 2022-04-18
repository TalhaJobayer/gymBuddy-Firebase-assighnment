
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/SharedPage/Header/Header'

import Footer from './Component/SharedPage/Footer/Footer'
import Resister from './Component/Register/Register'
import Login from './Component/Login/Login'
import MainBody from './Component/MainBody/MainBody';
import OfferInfo from './Component/MainPage/OfferInfo/OfferInfo';
import NotFound from './Component/NotFound/NotFound'

import CheckOut from './Component/MainPage/CheckOut/CheckOut';
import RequireAuth from './Component/SharedPage/RequireAuth/RequireAuth';
 
function App() {
  return (
    <div className="App">
     <Header></Header>
     
     <Routes>
       <Route path='/' element={<MainBody></MainBody>}></Route>
       <Route path='/home' element={<MainBody></MainBody>}></Route>
       <Route path='/Enroll/:singelOfferid' element={<OfferInfo></OfferInfo>}></Route>
       <Route path='/CheckOut' element={ 
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>
       <Route path='/Register' element={<Resister></Resister>}></Route>
       <Route path='/Login' element={<Login></Login>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       
     </Routes>
   
     <Footer></Footer>
    </div>
  );
}

export default App;
