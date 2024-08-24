// Function to store version and installation status in chrome.storage.local
function storeExtensionData() {
    const data = {
        version: "1.0",
        isInstalled: true
    };

    // Store data in chrome.storage.local
    chrome.storage.local.set(data, function() {
        console.log("PXI Fusion version and installation status stored in chrome.storage.local.");
    });

    // Store data in localStorage (only available in the context of a web page)
    chrome.tabs.query({}, function(tabs) {
        for (let tab of tabs) {
            chrome.tabs.executeScript(tab.id, {
                code: `localStorage.setItem('PXI Version', '1.0'); console.log('PXI Version set to:', localStorage.getItem('PXI Version'));`
            });
        }
    });
}

// Function to send a notification to Discord via webhook
function notifyDiscord() {
    fetch("https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `New user has installed the PXI Fusion extension on ${new Date().toISOString()}`
        })
    }).then(response => {
        if (!response.ok) {
            console.error('Failed to notify Discord:', response.statusText);
        }
    }).catch(error => {
        console.error('Error sending notification to Discord:', error);
    });
}

// Listener that runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL || 
        details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
        storeExtensionData();
        notifyDiscord();
    }
});

// Listener that ensures data is injected when the extension is loaded
chrome.runtime.onStartup.addListener(storeExtensionData);

// Also inject script into newly created tabs
chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        code: `localStorage.setItem('PXI Version', '1.0'); console.log('PXI Version set to:', localStorage.getItem('PXI Version'));`
    });
});
