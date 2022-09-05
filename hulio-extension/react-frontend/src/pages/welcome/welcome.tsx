
import './welcome.css'
import name from '../images/name.svg'
import { Link } from 'react-router-dom'

export default function Welcome(){
    return (
        <div className="welcome-container">
                <div className="content">
                    <img id="hulioLogo" src={name}></img>
                    <div id = "interaction">
                        <h1 id = "welcome">Welcome to hulio!</h1>
                        <p id = "introParagraph">We're your personal guide to the world of Solana. We provide everything from tutorials on how to use Solana dApps to security measures to keep you safe while exploring the ecosystem. Click below to get started!</p>
                        <div className= "buttons"> 
                            <Link to='/tutorials'>
                                <button id="tutorials">Tutorials</button>
                            </Link>
                            <Link to='/home'>
                                <button id="projects">Projects</button>
                            </Link>
                            <Link to='/settings'>
                                <button id="configure">Configure</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}