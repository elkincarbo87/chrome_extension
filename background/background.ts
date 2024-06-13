/// <reference types="chrome"/>

// Example of listening for extension installation or update
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated!');
});

// Example of message passing between background script and content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);

    // Realiza alguna operación en el background script
    if (message.action === 'greet') {
        const response = { greeting: 'Hello from background script!' };
        sendResponse(response);
    } else {
        sendResponse({ error: 'Unknown action' });
    }

    // Mantener sendResponse abierto de forma asincrónica (opcional, si necesitas operaciones asincrónicas)
    // return true;
});