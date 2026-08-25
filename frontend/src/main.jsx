import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './LandingPage/home/HomePage'
import AboutPage from './LandingPage/about/AboutPage'
import PricingPage from './LandingPage/pricing/PricingPage'
import ProductPage from './LandingPage/product/ProductPage'
import SignUp from './LandingPage/signup/SignUp'
import Login from './LandingPage/login/Login'
import SupportPage from './LandingPage/support/SupportPage'
// import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './LandingPage/NavBar'
import Footer from './LandingPage/Footer'
import NotFound from './LandingPage/NotFound'
import ReactDom from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/product' element={<ProductPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='*' element={<NotFound />} />

  
  </Routes>
  <Footer />
  </BrowserRouter>
)
