
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/SharedPage/Header/Header'
import Body from './Component/MainPage/Body/Body'
import Offers from './Component/MainPage/Offers/Offer'
import Footer from './Component/SharedPage/Footer/Footer'
import Resister from './Component/Register/Register'
import Login from './Component/Login/Login'
 
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/Register' element={<Resister></Resister>}></Route>
       <Route path='/Login' element={<Login></Login>}></Route>
     </Routes>
     <Body></Body>
     <Offers></Offers>
     <Footer></Footer>
    </div>
  );
}

export default App;
