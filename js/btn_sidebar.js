let body = document.getElementsByTagName('body');
let burger = document.querySelector('.burger');
let burger_lines = burger.children;
let navbar = document.querySelector('.navbar');
let nav_space = document.getElementById('nav_space');
let header = document.querySelector('header');
let navbar_element_container = document.querySelector('.navbar_element_container');
let q=0;

nav_space.style.height = header.offsetHeight+'px';

//console.log(cs(burger).height);
//if(cs(nav_space).height+cs(navbar_element_container).height>0)
//navbar_element_container.style.overflowY = 'scroll';



burger.addEventListener('click',function(){
    q++;    
    if(q%2!=0){
    burger_lines[0].className += ' top-line-off';
    burger_lines[1].className += ' middle-line-off';
    burger_lines[2].className += ' bottom-line-off';
    navbar.style.left = '0';
    }
    else
    {
        burger_lines[0].classList.remove('top-line-off');
        burger_lines[1].classList.remove('middle-line-off');
        burger_lines[2].classList.remove('bottom-line-off');
        navbar.style.left = '-300px'
    }
    
},false);


function cs(element){
    return window.getComputedStyle(element);
}