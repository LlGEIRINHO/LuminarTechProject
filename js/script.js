let menu = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "500px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

function goBack() {
    if (history.length > 1) {
        history.back();
    } else {
        location.href = '/';
    }
}

const items = document.querySelectorAll('.carousel .item');
let currentIndex = 1;

const list = document.querySelector('.carousel .list');

function rotateCarousel() {
    const items = list.querySelectorAll('.item');
    if (items.length > 1) {
        list.appendChild(items[0]);
    }
}

setInterval(rotateCarousel, 10000);


