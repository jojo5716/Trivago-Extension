try{
    var newDiv = document.createElement('iframe');
    newDiv.src = chrome.extension.getURL('src/index.html');

    var container = document.getElementById('main_content');
    if(container){
        try{
            container.textContent = '';
            container.appendChild(newDiv);
        }catch(err){

        }
    }
}catch(err){}
