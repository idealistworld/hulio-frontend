
import './tutorials.css'

export default function Tutorials() {
    return (
        <div className="tutorials-container">
            <div className="content">
                <h1 id="title">Learn to use Solana</h1>
                <p id="infoParagraph">Put your Solana to use by exploring the decentralized applications on the Solana blockchain. Each of the below projects are supported by the hulio tutorials feature. Complete hulio tutorials and earn free Solana!</p>
                <br />
                <div id="siteStats">
                    <div className="container">
                        <p>Decentralized Exchanges</p>
                        <div className="carousel">
                            <a href="https://jup.ag/"><div id="jupiter" className="item">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Jupiter</h1>
                            </div></a>
                            <a href=""><div id="orca" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>
                            <a href=""><div id="raydium" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>
                            <a href=""><div id="serum" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>

                        </div>
                    </div>
                    <div className="container">
                        <p>NFT Marketplaces</p>
                        <div className="carousel">
                            <a><div id="magicEden" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>
                            <a><div id="solanart" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>
                            <a><div id="metaplex" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>
                            <a><div id="solsea" className="item soon">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Coming Soon</h1>
                            </div></a>

                        </div>
                    </div>
                    <p>More Coming Soon...</p>
                </div>
            </div>
        </div>
    )
}