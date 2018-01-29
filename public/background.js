// function nontify() {
//   const option = {
//     type: 'list',
//     title: 'Ano Notification Running',
//     message: 'NIII ma',
//     iconUrl: '../imgs/anno_icon.png',
//     items: [{title: 'Pop1', message: 'first song'},
//       {title: 'Pop2', message: 'second song'},
//       {title: 'Pop3', message: 'third song'}]
//   };
//
//   chrome.notifications.create(option, () => console.log('pop Done!'));
// }

function viewIfTabIsSong() {
  window.chrome.tabs.onUpdated.addListener((tabId, changedInfo, tab) => {
    if (changedInfo.audible === true) {
      localStorage.setItem('song_title', tab.title);
    }
  });
}

viewIfTabIsSong();
