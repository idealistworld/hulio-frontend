
import './advanced-settings.css'
import name from '../images/name.svg'

export default function AdvancedSettings() {
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
                <button id="save">Save</button>
                <div id="pullSafeDBstatus"></div>
                <button id="pullSafeDB">Update Safe Database</button>
                <button id="printSafeDB">Show Safe Database</button>
                <div id="clearSafeDBstatus"></div>
                <button id="clearSafeDB">Clear Safe Database</button>
                <div id="updateIgnoreSitesStatus"></div>
                <button id="updateIgnoreSitesButton">Update Ignore Sites List</button>
                <button id="showIgnoreWarnRetypeSites">Show Ignore Retype Sites List</button>
                <button id="showIgnoreWarnSites">Show Ignore Warn Sites List</button>
                <button id="showTutorialCompleteList">Show Tutorial Complete List</button>
                <button id="showAllLists">Show All Lists</button>
            </div>
        </div>
    )
}