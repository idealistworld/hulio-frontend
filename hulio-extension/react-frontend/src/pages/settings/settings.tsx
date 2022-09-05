import name from '../images/name.svg'
import './settings.css'

export default function Settings(){

    // Saves options to chrome.storage
    function save_options() {
        var warningCBox = document.getElementById('warningCBox').checked;
        var retypingCBox = document.getElementById('retypingCBox').checked;
        var tutorialsCBox = document.getElementById('tutorialsCBox').checked;
        chrome.storage.local.set({
        warningCBox: warningCBox,
        retypingCBox: retypingCBox,
        tutorialsCBox: tutorialsCBox,
        }, function () {
            // Update status to let user know options were saved.
            var status = document.getElementById('status');
            if(status) {
                status.textContent = 'Options saved.';
                setTimeout(function () {
                    if(status) status.textContent = '';
                }, 750);
            }
        });
        
        
    }

    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
        // Use default value color = 'red' and likesColor = true.
        chrome.storage.local.get({
        warningCBox: true,
        retypingCBox: true,
        tutorialsCBox: true,
        }, function (items) {
        document.getElementById('warningCBox').checked = items.warningCBox;
        document.getElementById('retypingCBox').checked = items.retypingCBox;
        document.getElementById('tutorialsCBox').checked = items.tutorialsCBox;
        });
    }

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