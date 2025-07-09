import './App.css';
import { useNavigate } from 'react-router-dom';

import homePhoto from './assets/home.jpg';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import cart from './assets/cart.png';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="homeContainer">
        {/* devunk(); cart menu */}
        <img 
            src={homePhoto}
            alt="" 
            className="homeImage" 
        />
        <div className="navTopContainer">
            <div className="navTopContainerFlex">
                <div className="navLogoContainer">
                    <img 
                        src={logo}
                        alt="" 
                        className="navLogo"
                    />
                </div>
                <div className="navMenuContainer">
                    <img 
                        src={cart}
                        alt="" 
                        className="cart" 
                    />
                    <img 
                    src={menu}
                    alt="" 
                    className="menu" 
                    />
                </div>
            </div>
        </div>
        <div className="navBottomContainer">
            <div className="navBottomContainerFlex">
                <button>
                    WOMEN
                </button>
                <button>
                    MEN
                </button>
                <button>
                    UNISEX
                </button>
            </div>
        </div>

        <div className="headlineContainer">
          <p className="homeHeadline">
            made by a <span className="developer">developer,</span>
            <br />
            for <span className="developer">developers</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;
