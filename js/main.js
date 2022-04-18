const switchMenu = document.getElementById('menu')
const nav = document.getElementById('nav')

switchMenu.addEventListener('click', () => {
   nav.classList.toggle('nav-visible')
})