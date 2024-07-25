// open and close menu navbar

const menuBtn = document.querySelector('#menu__btn');
const closeBtn = document.querySelector('#close__btn');
const navMenu = document.querySelector('.nav__links');


// open menu
const openMenu = () => {
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    navMenu.style.display = 'block';
}

menuBtn.addEventListener('click', openMenu);

//close menu

const closeMenu = () => {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    navMenu.style.display = 'none';
}

closeBtn.addEventListener('click', closeMenu);

// hide navbar when click in nav link


if(window.innerWidth <= 1024){
    const navItem = document.querySelectorAll('.nav__links li a');
    navItem.forEach(item => {
        item.addEventListener('click', closeMenu);
    })
}

// add active clase on link when click

const navItems = navMenu.querySelectorAll('li');

const changeActiveItem = () => {
   navItems.forEach( (item) => {
    const link = item.querySelector('a');
    link.classList.remove('active');
   })
}

navItems.forEach((item) => {
    const link = item.querySelector('a');
    link.addEventListener('click',  () => {
        changeActiveItem();
        link.classList.add('active');
    })
})