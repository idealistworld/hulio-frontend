import twitter from '../../styles/icons/twitter.png'

const MiddleContent = () =>{
    return (
        <div id="writing">
                    <div id="writing-container">
                        <div id="writing-title">
                            <h1>Your personal <br/> "<div className="effect">friend</div> that does <span className="txt-rotate"
                                    data-period="2000"
                                    data-rotate={[ "crypto", "web3", "NFTs", "DeFi", "GameFi" ]}></span>".</h1>
                        </div>
                        <div id="writing-paragraph">
                            <p>Web3? dApp? Blockchain? You can count on hulio to be with you through it all. Learn your way
                                around the ecosystem, stay safe, and even earn free Solana with ease. hulio helps strengthen
                                existing projects by providing an in-browser solution to common crypto user experience
                                pitfalls. Whether a newcomer or veteran, hulio will enhance your adventures in the world of
                                crypto!</p>
                        </div>
                        <div id="action-button">
                            <button id="action-button1" className="fifth glow" >
                                Download
                            </button>
                            <button id="action-button2" className="fifth glow" >
                            <img id="twitter" src={twitter}/>
                                Twitter
                            </button>
                        </div>
                        <div id="vanity-metrics">
                            <div id="vanity1">
                                <h1>30+</h1>
                                <div className="vanity-writing">
                                    Solana Partners
                                </div>
                            </div>
                            <div id="vanity2">
                                <h1>10,000+</h1>
                                <div className="vanity-writing">
                                    Downloads
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default MiddleContent;