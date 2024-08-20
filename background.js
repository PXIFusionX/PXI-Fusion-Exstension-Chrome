// Handle Content Security Policy modifications
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
      const headers = details.responseHeaders.filter(header => 
        header.name.toLowerCase() !== 'content-security-policy' &&
        header.name.toLowerCase() !== 'x-frame-options'
      );
      return { responseHeaders: headers };
    },
    { urls: ["*://*.prodigygame.com/*"] },
    ["responseHeaders"]
  );
  
  // Handle redirection
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.includes("login-bg-13.png")) {
        return { redirectUrl: "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png" };
      }
    },
    { urls: ["*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png"] },
    ["blocking"]
  );
  
  // Send installation info to Discord webhook
  chrome.runtime.onInstalled.addListener(() => {
    fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `A new user has added the PXI Fusion extension!`,
        embeds: [{
          title: 'New User Installed PXI Fusion',
          fields: [{ name: 'Timestamp', value: new Date().toISOString() }]
        }]
      })
    });
  });
  