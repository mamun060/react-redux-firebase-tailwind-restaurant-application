import React, { useState } from 'react';
import logo from '../img/logo.png';
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md';
import Avater from '../img/avatar.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/stateProvider';


const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();
    const [IsMenu, setIsMenu] = useState(false);

    const login = async () =>{
        if(!user){
            const {user: {refreshToken, providerData}} = 
            await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!IsMenu);
        }
    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

    return ( 
        <header className="w-screen fixed z-50 p-3 md:p-6 md:px-16">
           {/* Desktop & table menu */}
           <div className="hidden md:flex w-full h-full justify-between items-center">
               <Link to={'/'} className="flex items-center gap-2">
                   <img className='w-8 object-cover' src={logo} alt="Logo" />
                   <p className='text-headingColor text-xl font-bold'>City</p>
               </Link>

               <div className='flex items-center gap-8'>
                <motion.ul 
                initial={{ opacity: 0, x: 200}}
                animate={{ opacity: 1, x: 0}}
                exit={{ opacity: 0, x: 200}}

                className='flex items-center gap-8'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </motion.ul>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket  className='text-textColor text-2xl ml-8 cursor-pointer'/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
 
                <div className='relative'>
                    <motion.img 
                    whileTap={{ scale: 0.6 }} 
                    src={ user ? user.photoURL : Avater} alt="Avater"
                    onClick={login} 
                    className="cursor-pointer w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full" />
                    
                    { IsMenu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}

                        className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>

                            {user && user.email === 'obujraju420@gmail.com' && (
                                <Link to={'createItem'}>
                                    <p className='
                                    px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                    transition-all duration-100 ease-in-out text-textColor text-base'>
                                    New Item <MdAdd />
                                    </p>
                                </Link>
                            )}
                            <p onClick={logout} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout /></p>
                        </motion.div>
                    )}

                </div>

               </div>
           </div>

           {/* Mobile menu */}
           <div className="flex items-center justify-between md:hidden w-full">

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket  className='text-textColor text-2xl ml-8 cursor-pointer'/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
                
                <Link to={'/'} className="flex items-center gap-2">
                   <img className='w-8 object-cover' src={logo} alt="Logo" />
                   <p className='text-headingColor text-xl font-bold'>City</p>
               </Link>

               <div className='relative'>
                    <motion.img 
                    whileTap={{ scale: 0.6 }} 
                    src={ user ? user.photoURL : Avater} alt="Avater"
                    onClick={login} 
                    className="cursor-pointer w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full" />
                    
                    { IsMenu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}

                        className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>

                            {user && user.email === 'obujraju420@gmail.com' && (
                                <Link to={'createItem'}>
                                    <p className='
                                    px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                    transition-all duration-100 ease-in-out text-textColor text-base'>
                                    New Item <MdAdd />
                                    </p>
                                </Link>
                            )}
                                <ul
                                    className='flex flex-col'>
                                    <li className=' px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'>Home</li>
                                    <li className=' px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'>Menu</li>
                                    <li className=' px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'>About Us</li>
                                    <li className=' px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'>Service</li>
                                </ul>
                            <p onClick={logout} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout /></p>
                        </motion.div>
                    )}

                </div>

           </div>
        </header>
     );
}
 
export default Header;