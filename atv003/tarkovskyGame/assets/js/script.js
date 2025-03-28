function changeOpacity(event){
    const image = event.target;

    if(image.style.opacity === "1"){
        image.style.opacity = "0";
    }else{
        image.style.opacity = "1";
    }
}