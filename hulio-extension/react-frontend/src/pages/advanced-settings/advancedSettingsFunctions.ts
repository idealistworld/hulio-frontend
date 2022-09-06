import api from "../../utils/api";

// Saves options to chrome.storage
export function saveOptions() {
    var debugCBox = (document.getElementById('debugCBox') as HTMLInputElement).checked;
    chrome.storage.local.set({
      debugCBox: debugCBox,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      if(status){
        status.textContent = 'Options saved.';
        setTimeout(function() {
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
    debugCBox: false,
}, function(items) {
    (document.getElementById('debugCBox') as HTMLInputElement).checked = items.debugCBox;
});
}

// needs to be updated
export function updateIgnoreSitesList () {

}

export function showIgnoreWarnRetype() {
  chrome.storage.local.get({
    ignoreWarnRetypeList: [],
  }, function(items) {
    alert('Ignore Warn Retype list: ' + items.ignoreWarnRetypeList + 'Type:' + typeof(items.ignoreWarnRetypeList));
  });
}

export function showIgnoreWarn() {
  chrome.storage.local.get({
    ignoreWarnList: [],
  }, function(items) {
    alert('Ignore Warn list: ' + items.ignoreWarnList);
  });
}

export function showTutorialCompleteList() {
  chrome.storage.local.get({
    tutorialCompleteList: [],
  }, function(items) {
    alert('Tutorial Complete List: ' + items.tutorialCompleteList)
});
}

//This function shwos all the lists and strings that are currently in storage. 
export function showAll () {
  chrome.storage.local.get({
    ignoreSitesList: [],
    ignoreWarnList: [],
    ignoreWarnRetypeList: [],
  }, function(items) {
    alert('Ignore Sites List: ' + items.ignoreSitesList + 
    '\n Ignore Warn List: ' + items.ignoreWarnList + 
    '\n Ignore Warn Retype List: ' + items.ignoreWarnRetypeList);
  });
}

export async function pullSafeDB () {
    await api.get(`/website/get_websites`)
        .then((json_data:any) =>{
            if (json_data.status === "success") {
                chrome.storage.local.set({
                  SafeDB: json_data.result,
                }, function() {
                  // Update status to let user know options were saved.
                  var status = document.getElementById('pullSafeDBstatus') as HTMLDivElement;
                  status.textContent = 'DB pulled.';
                  setTimeout(function() {
                    status.textContent = '';
                  }, 750);
                });
              } else {
                alert("Couldn't Access backend")
              }
        })
}

export function printSafeDB () {
  setTimeout(function() {
    chrome.storage.local.get({
      SafeDB: '',
    }, function(items) {
      alert(JSON.stringify(items.SafeDB));
    });
  }, 500);
}

export function clearSafeDB () {
  chrome.storage.local.set({
    SafeDB: [],
  }, function() {
    // Update status to let user know what happaned. 
    var status = document.getElementById('clearSafeDBstatus') as HTMLDivElement;
    status.textContent = 'DB Cleared.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
