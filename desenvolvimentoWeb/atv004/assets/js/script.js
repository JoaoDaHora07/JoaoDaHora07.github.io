function changeColor(element) {
    const selectedColor = element.style.backgroundColor;
    const colorItems = document.querySelectorAll('.box-color-item');
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.style.backgroundColor = selectedColor;
    });

    colorItems.forEach((item) => {
        item.classList.remove('selected');
    });

    element.classList.add('selected');
}

function changeFormat(element) {
    const selectedFormat = element.style.borderRadius;
    const formatItems = document.querySelectorAll('.box-format-item');
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.style.borderRadius = selectedFormat;
    });

    formatItems.forEach((item) => {
        item.classList.remove('selected');
    });

    element.classList.add('selected');
}

const container = document.getElementById('content');

document.getElementById('size-input').addEventListener('input', function() {
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.height = this.value + 'px';
        box.style.width = this.value + 'px';
    });
});

document.getElementById('select-flex-direction').addEventListener('change', function () {
    container.style.flexDirection = this.value;
});

document.getElementById('select-justify-content').addEventListener('change', function () {
    container.style.justifyContent = this.value;
});

document.getElementById('select-align-items').addEventListener('change', function () {
    container.style.alignItems = this.value;
});
