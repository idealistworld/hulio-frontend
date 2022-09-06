import api from '../../utils/api';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import './info.css'

export default function Info() {  
    const [searchParams, setSearchParams] = useSearchParams();
    let url = searchParams.get('url');

    const addressName = "Hulio Team"
    const address = "2v155UE19ghxH5CoUpBZQwjtYKHR9g4z7eS5qhPgJxTy"
    let tx_hash:string = '', date_created:any = null;

    const getData = async () =>{
        console.log(url)
        const response = await api.get(`/website/get_website/${url}`);

        console.log(response)

        // tx_hash = response.tx_hash;
        // date_created = response.date_created;
    }

    useEffect(() =>{
        getData()
    }, []);

    return (
        <div className="info-container">
            <div className="content">
                <a id='projectTitleLink' target="_blank" href=""><h1 id="projectTitle">{url ? url.toUpperCase() : 'Not Available'}</h1></a>
                <div id="siteStats">
                    <div className="stat" id="signingProjectAddress">
                        <h1 className="statTitle">Signing Address</h1> <a className = "data" id="signingAddress2Link" target="_blank" href={"https://solscan.io/account/" + address}><p id="signingAddress2">{address.slice(0,10) + "... (" + addressName + ")"}</p></a>
                    </div>
                    <div className="stat">

                        <h1 className="statTitle">Transaction Hash</h1> <a className = "data" id="transactionHashLink" target="_blank" href={"https://solscan.io/tx/" + tx_hash}><p id="transactionHash">{tx_hash != '' ? tx_hash.slice(0,23) + "..." : 'Not Available'}</p></a>
                    </div>
                    <div className="stat">

                        <h1 className="statTitle">Verified Web URL </h1> <a className = "data" id="verifiedWebURLLink" target="_blank" href={url ? url : ''}><p id="verifiedWebURL">{url ? url : 'Not Available'}</p></a>
                    </div>
                    <div className="stat">
                        <h1 className="statTitle">Website Signed</h1> <a className = "data" id="websiteSignedLink" target="_blank" href={url ? url : ''}><p id="websiteSigned">{url ? url : 'Not Available'}</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}