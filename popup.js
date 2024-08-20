document.getElementById('open-prodigy').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
  });
  
  document.getElementById('copy-code').addEventListener('click', () => {
    const code = document.getElementById('code-box').innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  });
  
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
  