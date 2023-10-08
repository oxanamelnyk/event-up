// Custom Scripts
function initializeEvents() {
    burgerMenu();
    changeMenuColor();
    
    // Checking if we are on the "price.html" page
    if (window.location.href.includes('price.html')) {
        price();
    }
    faq();
}

initializeEvents();

//Backlight active menu item
function changeMenuColor() {
    const currentPage = window.location.href;
    const menuLinks = document.querySelectorAll('.menu__item-link');

    menuLinks.forEach(link => {
        link.style.borderBottom = 'none'; // Скидання border-bottom для всіх елементів
        const linkHref = link.getAttribute('href');
        if (currentPage.includes(linkHref)) {
            link.style.borderBottom = '2px solid #E14817';
        }
    });
}

//Mobile menu
function burgerMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    const toggleMenu = () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('locked');
    };

    const resizeHandler = () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('locked');
        }
    };

    burger.addEventListener('click', toggleMenu);
    window.addEventListener('resize', resizeHandler);
}

// Price Page
function price() {
    const checkbox = document.querySelector('#checkbox');
    const label = document.querySelector('#label');

    checkbox.addEventListener('change', showPlan);

    function showPlan() {
        label.classList.toggle('selected');
        const prices = document.querySelectorAll('.subscription__price');
        prices.forEach(price => {
            price.classList.toggle('show-price');
        });
    }
}

//Accordion
function faq() {
    const items = document.querySelectorAll('.faq__item-trigger');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('faq__item-active');
            document
                .querySelectorAll('.faq__item')
                .forEach(child => {
                    if (child !== parent) {
                        child.classList.remove('faq__item-active');
                    }
                });
        });
    });
}