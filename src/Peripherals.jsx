import Navigation from "./Navigation"
import mouse1 from './assets/peripherals/mousepadBlack.png'
import cart from './assets/cart.png'
import toteWhite from './assets/peripherals/toteWhite.png'

import Footer from "./Footer"

function Peripherals () {
    return (
        <>
        <div className="peripheralsContainer">
            <Navigation />
            <div className="product1Container">
                <img 
                    src={mouse1}
                    alt="" 
                    className="mouse1" 
                />
                <p className="namePrice">
                    <p className="bold">MOUSE PAD</p>
                    <p>₱200.00</p>
                </p>
                <div className="addBuy">
                    <div className="addBuyFlex">
                        <img 
                            src={cart}
                            alt="" 
                            className="cart" 
                        />
                    <button className="buy">
                        BUY
                    </button>
                </div>
                    </div>
            </div>
            <div className="product1Container">
                <img 
                    src={toteWhite}
                    alt="" 
                    className="toteWhite" 
                />
                <p className="namePrice">
                    <p className="bold">LAPTOP TOTE BAG</p>
                    <p>₱200.00</p>
                </p>
                <div className="addBuy">
                    <div className="addBuyFlex">
                        <img 
                            src={cart}
                            alt="" 
                            className="cart" 
                        />
                    <button className="buy">
                        BUY
                    </button>
                </div>
                    </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Peripherals