const menu = document.getElementById('menu-btn').children[0]
const navbar = document.getElementById('navbar')
const header = document.querySelector('.header')

menu.onclick = function showMenu() {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = function hideMenu() {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
    } 
    else {
        header.classList.remove('active')
    }
}
