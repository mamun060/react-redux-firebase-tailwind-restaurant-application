import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import CreateContainer from './components/CreateContainer';
import MainConatienr from './components/MainContainer';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto  flex flex-col bg-primary"> 
            <Header />
            <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
              <Routes>
                <Route path='' element={ <MainConatienr />} />
                <Route path='createItem' element={ <CreateContainer />} />
              </Routes>
            </main>
        </div>
    </AnimatePresence>
  );
}

export default App;
