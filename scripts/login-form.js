const closeBtn = document.getElementById('close-btn')
const loginBtn = document.getElementById('login-btn')
const form = document.querySelector('.login-form')

loginBtn.onclick = function showLoginForm() {
    form.classList.add('active')
}

closeBtn.onclick = function showLoginForm() {
    form.classList.remove('active')
}