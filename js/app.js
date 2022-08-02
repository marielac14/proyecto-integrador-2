const menuItems = document.querySelectorAll('.menu-item');
const menuButton   = document.querySelector('#menu-button');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

menuButton.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active')
    openMenu.style.display = 'none';
    if (closeMenu.classList.contains('open')) {
        closeMenu.classList.remove('open')
        openMenu.style.display = 'block';
    } else {
        closeMenu.classList.add('open') 
    }
});

menuItems.forEach(function(item) {

    item.addEventListener('click', function() {

        document.body.classList.remove('mobile-menu-active');

        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        this.classList.add('active');

    });
});

