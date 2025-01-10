const mobileMenu = document.querySelector("#mobileMenu")
const bars = document.querySelector("#bars")

let isShow = false
const showHideMenu = () => {
    if(isShow) {
        bars.classList.add("fa-x")
        mobileMenu.classList.remove("hide")
    }
    else {
        bars.classList.remove("fa-x")
        mobileMenu.classList.add("hide")
    }
}
showHideMenu()

bars.onclick = () => {
    isShow = !isShow
    showHideMenu()
}