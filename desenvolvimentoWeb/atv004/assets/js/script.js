function changeColor(id) {
    const all = document.querySelectorAll('#box') 
    for(let index=0; index< all.length; index++){
        if(all[index].style.getPropertyValue('background-color') != document.querySelector('#box1').style.getPropertyValue('background-color')){
            all[index].style.getPropertyValue('background-color') = document.querySelector('#box1').style.getPropertyValue('background-color')
        }
    }
}