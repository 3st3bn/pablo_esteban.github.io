const hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#close");
const menu = document.querySelector("#menu");

hamburger.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closed.style.display ='block';
});
closed.addEventListener('click',()=>{
    menu.style.display = 'none';
    closed.style.display ='none';
});