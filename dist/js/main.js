// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('close');
    menuNav.classList.add('close');
    menuBranding.classList.add('close');
    navItems.forEach(item => item.classList.add('show'));  
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('close');
    menuNav.classList.remove('close');
    menuBranding.classList.remove('close');
    navItems.forEach(item => item.classList.remove('show'));  
    // Set Menu State
    showMenu = false;
  }
}

