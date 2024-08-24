// Function to store version and installation status in localStorage
function storeExtensionData() {
    chrome.storage.local.set({
        version: "1.0",
        isInstalled: true
    }, function() {
        console.log("PXI Fusion version and installation status stored.");
    });
}

// Listener for when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    storeExtensionData();

    // Send webhook notification to Discord
    fetch("https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `New user has installed the PXI Fusion extension on ${new Date().toISOString()}`
        })
    });
});

// Modify response headers to bypass content security policies
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        for (let i = 0; i < details.responseHeaders.length; i++) {
            let header = details.responseHeaders[i].name.toLowerCase();
            if (header === 'content-security-policy' || header === 'x-frame-options') {
                details.responseHeaders.splice(i, 1);
                i--;
            }
        }
        return { responseHeaders: details.responseHeaders };
    },
    {
        urls: ["*://*.prodigygame.com/*"],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "media", "websocket"]
    },
    ["blocking", "responseHeaders"]
);
