import './home.css'

export default function Home() {
    return (
        <div className="home-container">
            <div className="content">
                <h1 id="title">Explore the Ecosystem</h1>
                <p id="infoParagraph">Browse new projects in the Solana ecosystem that are authenticated by the hulio team. Each one of these projects has undergone a screening process and was confirmed secure and safe for use.</p>
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
                            <a href="https://www.orca.so/"><div id="orca" className="item">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Orca</h1>
                            </div></a>
                            <a href="https://raydium.io/"><div id="raydium" className="item">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Raydium</h1>
                            </div></a>
                            <a href="https://portal.projectserum.com/"><div id="serum" className="item">
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <h1>Serum</h1>
                            </div></a>

                        </div>
                        <div className="container">
                            <p>NFT Marketplaces</p>
                            <div className="carousel">
                                <a href="https://magiceden.io/"><div id="magicEden" className="item">
                                    <div>
                                        <i className="fa fa-glass"></i>
                                    </div>
                                    <h1>Magic Eden</h1>
                                </div></a>
                                <a href="https://solanart.io/"><div id="solanart" className="item">
                                    <div>
                                        <i className="fa fa-glass"></i>
                                    </div>
                                    <h1>Solanart</h1>
                                </div></a>
                                <a href="https://www.metaplex.com/"><div id="metaplex" className="item">
                                    <div>
                                        <i className="fa fa-glass"></i>
                                    </div>
                                    <h1>METAPLEX</h1>
                                </div></a>
                                <a href="https://solsea.io/"><div id="solsea" className="item">
                                    <div>
                                        <i className="fa fa-glass"></i>
                                    </div>
                                    <h1>Solsea</h1>
                                </div></a>
                            </div>
                        </div>
                    </div>
                    <p>More Coming Soon...</p>
                </div>
            </div>
        </div>
    )
}