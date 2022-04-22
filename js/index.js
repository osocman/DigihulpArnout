const burgerBtn = document.querySelector(".burger")
const navList = document.querySelector('.nav__list')

function hideSideMenu() {
    document.body.style.removeProperty("height")
    navList.classList.add("hidden")
}

function showSideMenu() {
    navList.classList.remove("hidden")
    document.body.style.height = "100vh"
}

burgerBtn.addEventListener('click', function() {
    if (navList.classList.contains("hidden")){
        showSideMenu()
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