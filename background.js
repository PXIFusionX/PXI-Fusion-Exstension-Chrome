// Function to store version and installation status in chrome.storage.local and localStorage
function storeExtensionData() {
    const data = {
        version: "1.0",
        isInstalled: true
    };

    // Store data in chrome.storage.local
    chrome.storage.local.set(data, function() {
        console.log("PXI Fusion version and installation status stored in chrome.storage.local.");
    });

    // Store data in localStorage for bookmarklet access
    localStorage.setItem('PXI_Fusion_Data', JSON.stringify(data));
    console.log("PXI Fusion version and installation status stored in localStorage.");
}

// Listener that runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL || 
        details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
        storeExtensionData();
    }
});

// Listener that also ensures data is stored when the background script is loaded
chrome.runtime.onStartup.addListener(storeExtensionData);
