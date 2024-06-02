//Animazione dell'icona del dropdown menu
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function(){
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')
	
	toggleBtnIcon.classList = isOpen
		? 'fa-solid fa-xmark'
		: 'fa-solid fa-bars'
}

//Slider 3D
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination:{
		el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
