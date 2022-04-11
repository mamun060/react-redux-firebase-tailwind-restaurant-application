import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import CreateContainer from './components/CreateContainer';
import MainConatienr from './components/MainContainer';


function App() {
  return (
    <div className="w-screen h-auto  flex flex-col bg-primary"> 
        <Header />
        <main className='mt-24 w-full  p-8'>
          <Routes>
            <Route path='' element={ <MainConatienr />} />
            <Route path='createItem' element={ <CreateContainer />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
