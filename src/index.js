import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Home from './Home';
import NavbarHash from './NavbarHash';
import NotFound from './NotFound';
import { HashRouter , BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter basename={'/tryApp'}> 
    {/*<NavbarHash/><HashRouter >*/}
    <Routes>
    <Route path='/form' element={<Home/>} />
    <Route path='/' element={<App/>} />
   {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
    {/*</HashRouter>*/}
    </BrowserRouter> 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
