import Header from './components/Header';
import logo from './assets/logo.svg';
import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo}/>
        <Routes>
          <Route  path='/' element={<Profile userName='liesemarques' />} />
          <Route path='/projects' element={<Projects userName='liesemarques' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
