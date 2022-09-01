import name from '../images/name.svg'
import './settings.css'

export default function Settings(){
    return(
        <div className="settings-container">
            <div className="content">
                <img id="hulioLogo" src={name}></img>
                <div id="checkboxOptions">
                    <div className="option"> 
                        <label>
                            Warn about unsafe sites?
                            <br/>
                            <input type="checkbox" id="warningCBox" />
                        </label>
                        </div>

                    <div className="option">
                        <label>
                            Require retyping the link?
                            <br/>
                            <input type="checkbox" id="retypingCBox" />
                        </label>
                    </div>
                    <div className="option">
                        <label>
                            Enable Tutorials
                            <br/>
                            <input type="checkbox" id="tutorialsCBox" />
                        </label>
                    </div>

                </div>
                <div id="status"></div>
                <button id="save">Save</button>
                <button id="advancedSettings">Advanced Settings</button>
                <button id="showAllLists">Show All Lists</button>
            </div>
        </div>
    )
}