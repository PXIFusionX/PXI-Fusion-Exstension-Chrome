document.getElementById('openProdigy').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
  });
  
  document.getElementById('copyConsoleCode').addEventListener('click', function() {
    copyToClipboard(document.getElementById('consoleCode').value);
  });
  
  document.getElementById('copyBookmarkCode').addEventListener('click', function() {
    copyToClipboard(document.getElementById('bookmarkCode').value);
  });
  
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
  }
  
  document.getElementById('discordBtn').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://discord.gg/VAkGbXKwhY' });
  });
  
  document.getElementById('youtubeBtn').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://www.youtube.com/@PXIFusionX' });
  });
  