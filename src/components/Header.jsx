import React from 'react';
import logo from '../img/logo.png';
import {MdShoppingBasket} from 'react-icons/md';

const Header = () => {
    return ( 
        <header className="w-screen fixed z-50
         p-6 px-16">
           {/* Desktop & table menu */}
           <div className="hidden md:flex w-full h-full">
               <div className="flex items-center gap-2">
                   <img className='w-8 object-cover' src={logo} alt="Logo" />
                   <p className='text-headingColor text-xl font-bold'>City</p>
               </div>

               <ul className='flex items-center gap-8 ml-auto'>
                   <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                   <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                   <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                   <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
               </ul>

               <div className='relative flex items-center justify-center'>
                   <MdShoppingBasket  className='text-textColor text-2xl ml-8'/>
                   <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                       <p className='text-xs text-white font-semibold'>2</p>
                   </div>
               </div>
           </div>

           {/* Mobile menu */}
           <div className=" flex md:hidden w-full"></div>
        </header>
     );
}
 
export default Header;