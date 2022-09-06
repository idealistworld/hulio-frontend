
import './advanced-settings.css'
import name from '../images/name.svg'
import { useEffect } from 'react'

import {
    restoreOptions,
    saveOptions,
    pullSafeDB,
    clearSafeDB,
    updateIgnoreSitesList,
    showIgnoreWarnRetype,
    showIgnoreWarn,
    showAll,
    printSafeDB,
    showTutorialCompleteList
} from './advancedSettingsFunctions'

export default function AdvancedSettings() {

    useEffect(() =>{
        restoreOptions();

    }, [])

    return (
        <div className="advanced-settings">
            <div className="content">
                <img id="hulioLogo" src={name}></img>
                <div id="checkboxOptions">
                     <div className="option">
                        <label className="inputThing">
                            Show debugging info?
                            <br />
                            <input type="checkbox" id="debugCBox" />
                        </label>
                    </div>
                </div>
                <div id="status"></div>
                <button id="save" onClick={saveOptions}>Save</button>
                <div id="pullSafeDBstatus"></div>
                <button id="pullSafeDB" onClick={pullSafeDB}>Update Safe Database</button>
                <button id="printSafeDB" onClick={printSafeDB}>Show Safe Database</button>
                <div id="clearSafeDBstatus"></div>
                <button id="clearSafeDB" onClick={clearSafeDB}>Clear Safe Database</button>
                <div id="updateIgnoreSitesStatus"></div>
                <button id="updateIgnoreSitesButton" onClick={updateIgnoreSitesList}>Update Ignore Sites List</button>
                <button id="showIgnoreWarnRetypeSites" onClick={showIgnoreWarnRetype}>Show Ignore Retype Sites List</button>
                <button id="showIgnoreWarnSites" onClick={showIgnoreWarn}>Show Ignore Warn Sites List</button>
                <button id="showTutorialCompleteList" onClick={showTutorialCompleteList}>Show Tutorial Complete List</button>
                <button id="showAllLists" onClick={showAll}>Show All Lists</button>
            </div>
        </div>
    )
}