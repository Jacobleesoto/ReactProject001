import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AddPage from './pages/AddPage.js';
import LocatePage from './pages/LocatePage.js';

function App() {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='add' element={<AddPage />} />
            <Route path='locate' element={<LocatePage />} />
         </Routes>
         React Project 001
      </div>
   );
}

export default App;
