import './App.css';
import { useNavigate } from 'react-router-dom';

import homePhoto from './assets/home.jpg';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import cart from './assets/cart.png';

import Navigation from './Navigation'

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="homeImageWrapper">
        <img 
                src={homePhoto}
                alt="" 
                className="homeImage" 
        />
    <Navigation/>
        <div className="headlineContainer">
          <p className="homeHeadline">
            made by a <span className="developer">developer,</span>
            <br />for <span className="developer">developers</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;
