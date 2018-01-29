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
  console.log('function called');
  window.chrome.tabs.onUpdated.addListener((tabId, changedInfo, tab) => {
    console.log(changedInfo, tab);

    console.log(document.querySelector('#anno-song-title'));
  });
}

setTimeout(viewIfTabIsSong, 1000);
