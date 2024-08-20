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
  
  chrome.runtime.onInstalled.addListener(function() {
    fetch("https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `New user has installed the PXI Fusion extension on ${new Date().toISOString()}`
      })
    });
  });
  