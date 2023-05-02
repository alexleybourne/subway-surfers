document.getElementById('toggleVideo').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleVideo,
    });
  });
});

function toggleVideo() {
  chrome.storage.local.get('videoVisible', (result) => {
    chrome.storage.local.set({ videoVisible: !result.videoVisible }, () => {
      chrome.tabs.executeScript({ code: 'window.location.reload();' });
    });
  });
}
