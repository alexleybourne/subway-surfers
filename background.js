chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleVideo,
  });
});

function toggleVideo() {
  chrome.storage.local.get('videoVisible', (result) => {
    chrome.storage.local.set({ videoVisible: !result.videoVisible }, () => {
      window.location.reload();
    });
  });
}
