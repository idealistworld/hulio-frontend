
import './welcome.css'
import name from '../images/name.svg'

export default function Welcome(){
    return (
        <div className="welcome-container">
                <div className="content">
                        <img id="hulioLogo" src={name}></img>
                    <div id = "interaction">
                        <h1 id = "welcome">Welcome to hulio!</h1>
                        <p id = "introParagraph">We're your personal guide to the world of Solana. We provide everything from tutorials on how to use Solana dApps to security measures to keep you safe while exploring the ecosystem. Click below to get started!</p>
                        <div className= "buttons"> 
                            <button id="tutorials">View Tutorials</button>
                            <button id="projects">Explore dApps</button>
                            <button id="configure">Configure</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}