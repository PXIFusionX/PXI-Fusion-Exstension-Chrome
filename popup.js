document.getElementById('open-prodigy').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
});

document.getElementById('copy-console-code').addEventListener('click', function() {
    const codeText = document.getElementById('console-code');
    codeText.select();
    document.execCommand('copy');
    alert('Console code copied to clipboard!');
});

document.getElementById('copy-bookmark-code').addEventListener('click', function() {
    const bookmarkText = document.getElementById('bookmark-code');
    bookmarkText.select();
    document.execCommand('copy');
    alert('Bookmark code copied to clipboard!');
});
