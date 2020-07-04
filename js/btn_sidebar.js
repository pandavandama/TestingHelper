let body = document.getElementsByTagName('body');
let burger = document.querySelector('.burger');
let burger_lines = burger.children;
let q=0;


burger.addEventListener('click',function(){
    q++;
    
  
    
    
    
    if(q%2!=0){
    burger_lines[0].className += ' top-line-off';
    burger_lines[1].className += ' middle-line-off';
    burger_lines[2].className += ' bottom-line-off';
    }
    else
    {
        burger_lines[0].classList.remove('top-line-off');
        burger_lines[1].classList.remove('middle-line-off');
        burger_lines[2].classList.remove('bottom-line-off');
        
    }
    
},false);