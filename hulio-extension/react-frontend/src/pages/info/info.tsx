
import './info.css'

export default function Info() {  
    return (
        <div className="info-container">
            <div className="content">
                <a id='projectTitleLink' target="_blank" href=""><h1 id="projectTitle"></h1></a>
                <div id="siteStats">
                    <div className="stat" id="signingProjectAddress">
                        <h1 className="statTitle">Signing Address</h1> <a className = "data" id="signingAddress2Link" target="_blank" href=""><p id="signingAddress2">Not Available</p></a>
                    </div>
                    <div className="stat">

                        <h1 className="statTitle">Transaction Hash</h1> <a className = "data" id="transactionHashLink" target="_blank" href=""><p id="transactionHash">Not Available</p></a>
                    </div>
                    <div className="stat">

                        <h1 className="statTitle">Verified Web URL </h1> <a className = "data" id="verifiedWebURLLink" target="_blank" href=""><p id="verifiedWebURL">Not Available</p></a>
                    </div>
                    <div className="stat">
                        <h1 className="statTitle">Website Signed</h1> <a className = "data" id="websiteSignedLink" target="_blank" href=""><p id="websiteSigned">Not Available</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}