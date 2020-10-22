function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu-button');
    let links = menu.find('.nav-menu-link');
    let overlay = menu.find('.burger-menu-overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
     
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('menu-open');
        if (menu.hasClass('menu-open')) {
            $('body').css('overflow', 'visible');
       } else {
            $('body').css('overflow', 'visible');

        }
    }
}

burgerMenu ('.wrapper');