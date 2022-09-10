import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import name from '../images/name.svg'
import './settings.css'
import {
    saveOptions,
    restoreOptions,
    updateIgnoreSitesList,
    showIgnoreWarnRetype,
    showIgnoreWarn,
    showAll
} from './settingsFunctions'

export default function Settings(){

    useEffect(() =>{
        restoreOptions();
    }, [])

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
                <button id="save" onClick={saveOptions}>Save</button>
                <Link to='/advanced-settings'>
                    <button id="advancedSettings">Advanced Settings</button>
                </Link>
                <button id="showAllLists" onClick={showAll}>Show All Lists</button>
            </div>
        </div>
    )
}