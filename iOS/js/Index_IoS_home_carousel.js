let images = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.png',
    'slide4.jpg',
    'slide5.png',
    'slide6.png',
    'slide7.jpg',
    'slide8.png',
    'slide9.jpg'
];

let i = 0;

function mySlider(operation) {
    if (operation === 'prev' && i === 0) {
        i = images.length - 1;
    }
    if (operation === 'next' && i === images.length - 1) {
        i = 0;
    }
    if (operation === 'next') {
        document.getElementById('picture').src = '../images/' + images[++i];
    }
    else {
        document.getElementById('picture').src = '../images/' + images[--i];
    }
}