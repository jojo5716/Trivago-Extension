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


}