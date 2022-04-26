const burgerBtn = document.querySelector(".burger")
const navList = document.querySelector('.nav__list')
const html = document.getElementById('html')

//SIDE MENU

function showSideMenu() {
    navList.classList.remove("hidden")
    document.body.classList.add("no-scrolling")
    html.classList.add("no-scrolling")
}

function hideSideMenu() {
    document.body.classList.remove("no-scrolling")
    html.classList.remove("no-scrolling")
    navList.classList.add("hidden")
}

burgerBtn.addEventListener('click', function() {
    if (!navList.classList.contains("hidden")) {
        hideSideMenu()
    } else {
        showSideMenu()
    }
})

document.querySelectorAll('.nav__list__link').forEach(item => {
    item.addEventListener('click', event => {
      if (!navList.classList.contains("hidden")) {
          hideSideMenu()
      }
    })
  })