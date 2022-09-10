// Saves options to chrome.storage
export function saveOptions() {
    let warningCBox = (document.getElementById('warningCBox') as HTMLInputElement).checked;
    let retypingCBox = (document.getElementById('retypingCBox')  as HTMLInputElement).checked;
    let tutorialsCBox = (document.getElementById('tutorialsCBox') as HTMLInputElement).checked;
    chrome.storage.local.set({
        warningCBox: warningCBox,
        retypingCBox: retypingCBox,
        tutorialsCBox: tutorialsCBox,
    }, function () {
        // Update status to let user know options were saved.
        let status = document.getElementById('status');
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
export function restoreOptions() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get({
        warningCBox: true,
        retypingCBox: true,
        tutorialsCBox: true,
    }, function (items:any) {
        (document.getElementById('warningCBox') as HTMLInputElement).checked = items.warningCBox;
        (document.getElementById('retypingCBox') as HTMLInputElement).checked = items.retypingCBox;
        (document.getElementById('tutorialsCBox') as HTMLInputElement).checked = items.tutorialsCBox;
    });
}

//NEEDS TO BE UPDATED
export function updateIgnoreSitesList() {

}

export function showIgnoreWarnRetype() {
    setTimeout(function () {
        chrome.storage.local.get({
        ignoreWarnRetypeList: [],
        ignoreWarnRetypeListStr: '',
        }, function (items) {
        alert('Ignore Warn Retype list: ' + items.ignoreWarnRetypeList + 'Type:' + typeof (items.ignoreWarnRetypeList));
        alert(items.ignoreWarnRetypeListStr);
        });
    }, 750);
}

export function showIgnoreWarn() {
    setTimeout(function () {
      chrome.storage.local.get({
        ignoreWarnList: [],
        ignoreWarnListStr: '',
      }, function (items) {
        alert('Ignore Warn list: ' + items.ignoreWarnList);
        alert(items.ignoreWarnListStr);
      });
    }, 750);
}


//This function shwos all the lists and strings that are currently in storage. 
export function showAll() {
    chrome.storage.local.get({
      safeSitesList: [],
      safeSitesListStr: '',
      ignoreSitesList: [],
      ignoreSitesListStr: '',
      ignoreWarnList: [],
      ignoreWarnListStr: '',
      ignoreWarnRetypeList: [],
      ignoreWarnRetypeListStr: '',
    }, function (items) {
      alert('Safe Sites List: ' + items.safeSitesList +
        '\n Safe Sites List String: ' + items.safeSitesListStr +
        '\n Ignore Sites List: ' + items.ignoreSitesList +
        '\n Ignore Sites List String: ' + items.ignoreSitesListStr +
        '\n Ignore Warn List: ' + items.ignoreWarnList +
        '\n Ignore Warn List String: ' + items.ignoreWarnListStr +
        '\n Ignore Warn Retype List: ' + items.ignoreWarnRetypeList +
        '\n Ignore Warn Retype List: ' + items.ignoreWarnRetypeListStr);
    });
}



