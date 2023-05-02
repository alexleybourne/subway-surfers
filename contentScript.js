chrome.storage.local.get('videoVisible', (result) => {
  if (result.videoVisible) {
    const videoWrapper = document.createElement('div');
    videoWrapper.style.position = 'fixed';
    videoWrapper.style.bottom = '-50%';
    videoWrapper.style.width = '100%';
    videoWrapper.style.height = '50%';
    videoWrapper.style.zIndex = '10000';
    videoWrapper.style.backgroundColor = 'white';
    videoWrapper.style.transition = 'bottom 0.5s ease-in-out';

    videoWrapper.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ChBg4aowzX8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

    document.documentElement.style.height = '50%';
    document.body.style.overflowY = 'scroll';
    document.body.appendChild(videoWrapper);

    setTimeout(() => {
      videoWrapper.style.bottom = '0';
    }, 100);
  }
});
