var newDiv = document.createElement('iframe');
newDiv.src = chrome.extension.getURL('src/index.html');


var container = document.getElementById('main_content');

if(container) {
    container.textContent = '';
    container.appendChild(newDiv);

    newDiv.style.width = '100%';
    newDiv.style.minHeight = '600px';
    newDiv.style.overflow = 'hidden';
    newDiv.style.border = '0';

    changeBackGroundImage();
}

function changeBackGroundImage() {
    var mainWrap = document.getElementsByClassName('main-wrap')[0];
    mainWrap.style.backgroundImage = "url('http://a.dilcdn.com/sw/background/bg_starsL-d39a0dc14ce4.jpg')";
    mainWrap.style.backgroundColor = '#151515';
    mainWrap.style.backgroundSize = '23% 100%';
    mainWrap.style.backgroundRepeat= 'no-repeat';
    mainWrap.style.backgroundPosition= '-64px -57px';

}

