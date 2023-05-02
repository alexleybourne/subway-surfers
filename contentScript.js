let videoVisible = false;

chrome.storage.local.get('videoVisible', (result) => {
  videoVisible = result.videoVisible;
  updateVideoVisibility();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'toggleVideo') {
    videoVisible = !videoVisible;
    chrome.storage.local.set({ videoVisible: videoVisible });
    updateVideoVisibility();
  }
});

function updateVideoVisibility() {
  const videoWrapper = document.getElementById('video-wrapper');

  if (videoVisible) {
    if (!videoWrapper) {
      createVideoWrapper();
    } else {
      videoWrapper.style.bottom = '0';
    }
    document.documentElement.style.height = '50%';
    document.body.style.height = '50%';
    document.body.style.overflowY = 'scroll';
  } else {
    if (videoWrapper) {
      videoWrapper.style.bottom = '-50%';
    }
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.overflowY = 'auto';
  }
}

function createVideoWrapper() {
  const videoWrapper = document.createElement('div');
  videoWrapper.id = 'video-wrapper';
  videoWrapper.style.position = 'fixed';
  videoWrapper.style.bottom = '0';
  videoWrapper.style.width = '100%';
  videoWrapper.style.height = '50%';
  videoWrapper.style.zIndex = '10000';
  videoWrapper.style.backgroundColor = 'white';
  videoWrapper.style.transition = 'bottom 0.5s ease-in-out';

  videoWrapper.innerHTML = `
    <iframe id="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/ChBg4aowzX8?&autoplay=1&amp;controls=0&amp;start=9" title="YouTube video player" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
`;

  document.body.appendChild(videoWrapper);
}
