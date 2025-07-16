import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Apparel from './Apparel'
import Peripherals from './Peripherals'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Apparel' element={<Apparel />} />
        <Route path='/Peripherals' element={<Peripherals />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
