document.getElementById('openProdigy').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
});

document.getElementById('copyConsoleCode').addEventListener('click', function() {
    const consoleCode = document.getElementById('consoleCode');
    consoleCode.select();
    document.execCommand('copy');
    alert('Console code copied to clipboard!');
});

document.getElementById('copyBookmarkCode').addEventListener('click', function() {
    const bookmarkCode = document.getElementById('bookmarkCode');
    bookmarkCode.select();
    document.execCommand('copy');
    alert('Bookmark code copied to clipboard!');
});

document.getElementById('discordButton').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://discord.gg/VAkGbXKwhY' });
});

document.getElementById('youtubeButton').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://www.youtube.com/@PXIFusionX' });
});
