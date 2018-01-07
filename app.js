document.querySelector('.menu').addEventListener('click', function(){
    document.querySelector('.menu-dropdown').classList.toggle('menu-dropdown-active');
})

document.querySelector('.search .fa-search').addEventListener('click', function(){
    document.querySelector('.search-dropdown').classList.toggle('search-dropdown-active');
})

window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    if(scroll > 100){
        document.querySelector('header').classList.add('header-scrolled');
        document.querySelector('.side-menu').classList.add('side-menu-fade-in');        
    }else{
        document.querySelector('header').classList.remove('header-scrolled');
        document.querySelector('.side-menu').classList.remove('side-menu-fade-in');                
    }

})