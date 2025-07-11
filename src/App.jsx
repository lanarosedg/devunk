import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Apparel from './Apparel'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Apparel' element={<Apparel />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
