const burgerBtn = document.querySelector(".burger")
const navList = document.querySelector('.nav__list')

burgerBtn.addEventListener('click', function() {
    if (navList.classList.contains("hidden")){
        navList.classList.remove("hidden")
    } else {
        navList.classList.add("hidden")
    }
})