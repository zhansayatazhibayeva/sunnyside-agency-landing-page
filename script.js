
var hamburger=document.querySelector('.hamburger');
var sidebar=document.querySelector('.sidebar');

hamburger.addEventListener('click',function(){
    sidebar.classList.toggle('active');
});

