const menubar = document.querySelector('.menubar');
const hidemenu = document.querySelector('.hidemenu');
const hiddensidebar = document.querySelector('.hidden-sidebar')

menubar.addEventListener('click', function(){
    hiddensidebar.classList.add('active');
})

hidemenu.addEventListener('click', function(){
    hiddensidebar.classList.remove('active')
})

