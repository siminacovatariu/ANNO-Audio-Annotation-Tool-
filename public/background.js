function notify() {
  if (localStorage.getItem('notification') !== null) {
    const option = {
      type: 'basic',
      title: 'Anno Notification',
      message: 'Annotation created',
      iconUrl: 'anno_icon.png',
    };
    chrome.notifications.create(option, () => localStorage.removeItem('notification'));
  }
}

function viewIfTabIsSong() {
  if (localStorage.getItem('song_title') === null) {
    localStorage.setItem('song_title', ' Song name');
  }
  window.chrome.tabs.onUpdated.addListener((tabId, changedInfo, tab) => {
    if (changedInfo.audible === true) {
      localStorage.setItem('song_title', tab.title);
      localStorage.setItem('song_url', tab.url);
    }
  });
}

viewIfTabIsSong();

setTimeout(notify, 1000);
