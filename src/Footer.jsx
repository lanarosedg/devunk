import logo from './assets/logo.png'
import instagram from './assets/logo/instagram.png'
import facebook from './assets/logo/facebook.png'
import tiktok from './assets/logo/tiktok.png'

import { useNavigate } from 'react-router-dom'

function Footer() {
    return (
        <>
        <div className="footerParent">
            <p className="statement">
                <span className="statementBold">
                devunk.ph isn’t just a clothing brand — it’s a statement 
                for the <span className="green">build</span>-
                <span className="yellow">break</span>-
                <span className="red">debug</span>-
                <span className="blue">repeat</span> culture. </span>
                Founded by a developer who knows the hustle behind the screen, 
                devunk.ph was born to connect and represent the tech community through 
                wearable code.
            </p>
            <img 
                src={logo} 
                alt="" 
                className="logo" 
            />
            <p className="suggestion">
                Suggestions? Connect with us
            </p>
            <div className="socMed">
                <div className="socMedFlex">
                    <a href="https://www.instagram.com/devunk.ph/">
                        <img 
                            src={instagram} 
                            alt=""                     
                        />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61578306112699">
                        <img 
                            src={facebook}
                            alt="" 
                        />
                    </a>
                    <a href="https://www.tiktok.com/@devunk.ph">
                        <img 
                            src={tiktok}
                            alt="" 
                        />
                    </a>
                </div>
            </div>
            <div className="copyright">
                © 2025 | devunk.ph | wear your code
            </div>
        </div>
        </>
    )
}

export default Footer