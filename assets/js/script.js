function showMainContent() {
    event.preventDefault(); 

    
    document.getElementById('text-container').style.display = 'block';
    document.getElementById('social-media-container').style.display = 'flex';

    document.getElementById('dwList').style.display = 'none';
}

function hideDw() {
    event.preventDefault(); 

    
    document.getElementById('text-container').style.display = 'none';
    document.getElementById('social-media-container').style.display = 'none';

    document.getElementById('dwList').style.display = 'block';
}

