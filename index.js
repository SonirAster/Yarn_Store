function qs (name)  {
    let item = document.querySelector(name);
    return item;
};

function toggleWindow (el, targ) {
    qs(el).addEventListener('click', () => {
        qs(targ).classList.toggle('hidden');
    })
}

function toggleNavBar (el) {
    qs(el).addEventListener('click', () => {
        qs('.navbar').classList.toggle('nav-hidden');
    })
}

toggleWindow('.header_mobile_menu', '.header_mobile_menu-container');
toggleWindow('.mob_categories-list-container', '.mob_categories_list');

toggleWindow('.mob_categories_close_button', '.mob_categories_list');
toggleWindow('.header_mobile_close_menu_button', '.header_mobile_menu-container');


toggleNavBar('.store_show-filters');
toggleNavBar('.navbar_close');

