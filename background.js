chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
      return {
        responseHeaders: details.responseHeaders.filter(header => 
          header.name.toLowerCase() !== 'content-security-policy' &&
          header.name.toLowerCase() !== 'x-frame-options'
        )
      };
    },
    { urls: ["*://*.prodigygame.com/*"] },
    ["blocking", "responseHeaders"]
  );
  
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.includes("login-bg-13.png")) {
        return { redirectUrl: "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png" };
      }
    },
    { urls: ["*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png"] },
    ["blocking"]
  );
  