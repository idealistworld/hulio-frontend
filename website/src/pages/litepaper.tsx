import LitepaperLeft from "../components/litepaper/LitepaperLeft";
import MiddleContent from "../components/middle-content/MiddleContent";
import Navbar from "../components/navbar/Navbar";
import RightBox from "../components/right-box/RightBox";


const Litepaper = () =>{
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content-container">
                    <LitepaperLeft />
            </div>
        </div>
    )
}

export default Litepaper;