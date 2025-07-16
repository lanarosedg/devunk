import Navigation from "./Navigation"
import mouse1 from './assets/peripherals/mousepadBlack.png'
import cart from './assets/cart.png'

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
        </div>
        </>
    )
}

export default Peripherals