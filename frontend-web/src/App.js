 
import { Route, Routes } from 'react-router-dom';
import './App.css';
 
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
// import Donate from './components/Donate';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';
import Card from './components/Card';
import {BlogPage}  from "./data/blog"
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import DonationForm from './components/DonationData/DonationForm';
import Donation from './components/DonationData/Donation';
// import background from "./assets/gaza child2.jpg"
function App() {
  return (
    <div className='w-[100vw]  ' >
        
        
       
            <Navbar/>

            <Routes>

             <Route path='/' element={<HeroSection/>}/>

             <Route path='/about' element={<AboutUs/>}/> 

             <Route path='/contact' element={<Contact/>}/>

             <Route path='/blogdetail/:id' element={<BlogDetail cards={BlogPage}/>}/>

             <Route path='/card' element={<Card/>}/>

             <Route path='/blog' element={<Blog cards={BlogPage}/>}/>


             <Route path='/signup' element={<SignUp  />}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/profile' element={<Profile/>}/>
             <Route path='/donationForm' element={<DonationForm/>}/>
             <Route path='/donationData' element={<Donation/>}/>





             

            </Routes>
             


         
    </div>
  );
}

export default App;
