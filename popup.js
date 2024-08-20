document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copy-code');
    const codeBox = document.getElementById('code-box');

    copyButton.addEventListener('click', function () {
        codeBox.select();
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    });

    const openButton = document.getElementById('open-prodigy');
    openButton.addEventListener('click', function () {
        chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
    });
});
