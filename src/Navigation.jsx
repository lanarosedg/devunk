import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

import homePhoto from './assets/home.jpg';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import whiteCart from './assets/whiteCart.png';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnApparel = location.pathname === '/Apparel';
  return (
    <>
      <div className="homeContainer">
        {/* devunk(); cart menu */}
        
        <div className="navTopContainer">
            <div className="navTopContainerFlex">
                <div className="navLogoContainer">
                    <img 
                        src={logo}
                        alt="" 
                        className="navLogo"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="navMenuContainer">
                    <img 
                        src={whiteCart}
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
                <button 
                    className='apparelButton'
                    style={{ color: isOnApparel ? '#00FF88' : '#E5E7EB' }}
                    onClick={() =>navigate('/Apparel')}>
                    APPAREL
                </button>
                <button>
                    PERIPHERALS
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;
