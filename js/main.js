const menuToggler = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')


menuToggler.addEventListener('click', ()=>{
    menu.classList.toggle('toggled')
})

