let selectLanguage = document.querySelector('.select-lang');
let tabsContents  = document.querySelectorAll('.tab-pane');

selectLanguage.addEventListener('change', function() {
    let selectValue = selectLanguage.value;
    tabsContents.forEach(tab => {
       if(tab.id === selectValue) {
        tab.classList.add('active')
       } else {
        tab.classList.remove('active')
       }
    })
})

document.querySelectorAll('.video-btn').forEach(element => {
    element.addEventListener('click', function(event) {
        let iframes = document.querySelectorAll('iframe');
       iframes.forEach(iframe => {
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
        func: 'stopVideo' }), '*');
       })
      })
})


