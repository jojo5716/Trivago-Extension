var detectingURL = setInterval(function(){
    const currentUrl = window.location.hostname;
    const isTrivagoURL = currentUrl.indexOf('trivago.es') != -1;
    const isTrivagoSearch = window.location.search && window.location.search.length > 0;

    if (isTrivagoURL && isTrivagoSearch) {
        activateExtension();
    }
}, 3000);


function checkIframeExist() {
    return document.getElementById('iframe-trivago-extension') != null;
}

function activateExtension() {
    clearInterval(detectingURL);

    let existIframe = checkIframeExist();
    if(!existIframe){
        var newDiv = document.createElement('iframe');
        newDiv.src = chrome.extension.getURL('src/index.html');
        newDiv.id = 'iframe-trivago-extension';

        var container = document.getElementsByClassName('main-wrap');

        if(container) {
            //container.textContent = '';
            container[0].appendChild(newDiv);

            newDiv.style.width = '100%';
            newDiv.style.minHeight = '600px';
            newDiv.style.overflow = 'hidden';
            newDiv.style.border = '0';

            changeBackGroundImage();

            var oldContainer = document.getElementsByClassName('centerwrapper');
            if(oldContainer){
                oldContainer[0].style.display = 'none';
            }

        }
    }


    function changeBackGroundImage() {
        var mainWrap = document.getElementsByClassName('main-wrap')[0];
        mainWrap.style.backgroundImage = "url('http://a.dilcdn.com/sw/background/bg_starsL-d39a0dc14ce4.jpg')";
        mainWrap.style.backgroundColor = '#151515';
        mainWrap.style.backgroundSize = '23% 100%';
        mainWrap.style.backgroundRepeat= 'no-repeat';
        mainWrap.style.backgroundPosition= '-64px -57px';

    }


}
