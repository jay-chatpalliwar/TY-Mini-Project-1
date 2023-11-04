import { Link, Route, Routes,NavLink } from "react-router-dom";
// import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import {GiGraduateCap} from 'react-icons/gi'
// import SignUp from "./SignUp";
// import Login from "./Login";

const Home = () => {
  return (
    <div className="ml-20">
      <div>
      <NavLink to={"/"} className={`-ml-8 font-bold text-2xl drop-shadow-lg flex items-center mt-8 `}><span><GiGraduateCap className='text-blue-500 text-3xl'></GiGraduateCap></span><span className='text-blue-500'>Grade</span><span className='text-slate-800'>Sarthi</span></NavLink>
      </div>
      <Hero></Hero>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
