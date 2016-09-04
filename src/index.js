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
    mainWrap.style.backgroundImage = "url('https://d13yacurqjgara.cloudfront.net/users/59100/screenshots/2289693/darkwader.jpg')";
    mainWrap.style.backgroundColor = '#000024';
    mainWrap.style.backgroundSize = '23% 35%';
    mainWrap.style.backgroundRepeat= 'no-repeat';
    mainWrap.style.backgroundPosition= '-64px -57px';

}

