




function showMenu() {
    document.querySelector('#menu').style.marginLeft = 0 ;
}

function hideMenu() {
    document.querySelector('#menu').style.marginLeft = '-250px';
}

function updateView(url){
    document.querySelector('#view').src = url;
}

function home(){
    
    
    window.location.href = 'https://joaodahora07.github.io/';
    
}