
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './component/Menu/menu';
import { Iphone } from './component/Main/main';
import { Register } from './component/Register/register';
import { Login } from './component/Login/login';
import { Product } from './component/Product/product';
import { Red } from './component/Details/red';
import { Green } from './component/Details/green';
import { Blue } from './component/Details/blue';
import { Black } from './component/Details/black';
import { White } from './component/Details/white';
import { Booking } from './component/Booking/booknow';
import { Getdata } from './component/Admin/admin';
import { Final } from './component/Final/final';
import { Admin } from './component/Admin/adminlogin';
import { Getsingle } from './component/Single/single';


function App() {
  return (
    <>
     
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Menu />, <Iphone />]} />
          <Route path='/register' element={[<Menu />, <Register />]} />
          <Route path='/login' element={[<Menu />, <Login />]} />
          <Route path='/product' element={[<Menu />, <Product />]} />
          <Route path='/detail1' element={[<Menu />, <Red />]} />
          <Route path='/detail2' element={[<Menu />, <Green />]}/>
          <Route path='/detail3' element={[<Menu />, <Blue />]} />
          <Route path='/detail4' element={[<Menu />, <Black />]} />
          <Route path='/detail5' element={[<Menu />, <White />]} />
          <Route path='/book' element={[<Menu />, <Booking />]} />
          <Route path='/admin' element={[<Menu />, <Getdata />]} />
          <Route path='/final' element={[<Menu />, <Final />]} />
          <Route path='/adminlogin' element={[<Menu />, <Admin />]} />
          <Route path='/single' element={[<Menu />, <Getsingle />]} />
          
          
        
          
          
        </Routes>
      </BrowserRouter>
    </>
    
  );
}


export default App;
