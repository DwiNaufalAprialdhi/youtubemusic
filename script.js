
// SideBar Collapse
const menu = document.querySelector('.menu_svg');
const sideBar = document.querySelector('.sidebar');
const sideBarMenu = document.querySelector('.sidebar_menu');
const sideBarMenu2 = document.querySelector('.sidebar_menu2');
const sideBarMenu3 = document.querySelector('.sidebar_menu3');
const dropDown = document.querySelector('.dropdown_svg');
const dropDown2 = document.querySelector('.dropdown_svg2');
const dropDown3 = document.querySelector('.dropdown_svg3');
const sideBarMenuDetails = document.querySelector('.sidebar_menu_details');

menu.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar_active');
    sideBarMenu.classList.toggle('sidebar_menu_active');
    sideBarMenu2.classList.toggle('sidebar_menu_active');
    sideBarMenu3.classList.toggle('sidebar_menu_active');
    dropDown.classList.toggle('dropdown_svg_active');
    dropDown2.classList.toggle('dropdown_svg_active');
    dropDown3.classList.toggle('dropdown_svg_active');
    sideBarMenuDetails.classList.toggle('sidebar_menu_details_active');
});

// Active Link TabBar Menu
const tabBarButton = document.querySelectorAll('.tabBar_button');

tabBarButton.forEach(tabBarButton => {
    tabBarButton.addEventListener('click', () => {
        document.querySelector('.tabBar_buttonActive')?.classList.remove('tabBar_buttonActive');
        tabBarButton.classList.add('tabBar_buttonActive');
    });
});


// First Song Slider
const initSlider = () => {
    const cardList = document.querySelector('.firstsong_cardlist')
    const slideButtons = document.querySelectorAll('.slide_button')

    slideButtons.forEach(button => {
        button.addEventListener('click', () =>{
            const direction = button.id === 'prev_slide' ? -1 : 1;
            const scrollAmount = cardList.clientWidth * direction;
            cardList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
}
window.addEventListener('load', initSlider);

// First Song Slider
const ThirdSlider = () => {
    const cardListThird = document.querySelector('.thirdsong_cardlist')
    const slideButtonsThird = document.querySelectorAll('.thirdsong_slide_button')

    slideButtonsThird.forEach(button => {
        button.addEventListener('click', () =>{
            const directionThird = button.id === 'thirdsong_prev_slide' ? -1 : 1;
            const scrollAmountThird = cardListThird.clientWidth * directionThird;
            cardListThird.scrollBy({ left: scrollAmountThird, behavior: 'smooth' });
        });
    });
}
window.addEventListener('load', ThirdSlider);