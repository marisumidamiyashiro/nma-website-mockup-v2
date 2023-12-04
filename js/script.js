
const mymenubutton = document.querySelector('.menu-button');
const mylistitems = document.querySelectorAll('.nma-site-nav a');
const mysitenav = document.querySelector('.site-header .nma-site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
    } else {
        mysitenav.setAttribute('data-navstate', 'open');
    }
}
mylistitems.forEach(item => {
    item.onclick = function () {
        mysitenav.setAttribute('data-navstate', 'closed');
    };
});

