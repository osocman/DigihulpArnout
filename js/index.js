const burgerBtn = document.querySelector(".burger")
const navList = document.querySelector('.nav__list')

function hideSideMenu() {
    navList.classList.add("hidden")
}

burgerBtn.addEventListener('click', function() {
    if (navList.classList.contains("hidden")){
        navList.classList.remove("hidden")
    } else {
        hideSideMenu()
    }
})

document.querySelectorAll('.nav__list__link').forEach(item => {
    item.addEventListener('click', event => {
      if (!navList.classList.contains("hidden")) {
          hideSideMenu()
      }
    })
  })