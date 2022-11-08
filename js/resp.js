let burger=document.querySelector(".burger");
rightNav=document.getElementsByClassName('rightNav');
 navbar=document.querySelector(".navbar");
 navlist=document.querySelector(".nav-list")


burger.addEventListener('click',()=>
{
console.log("hello")
console.log(rightNav[0].innerHTML)
rightNav[0].classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

console.log(navlist);
console.log(navbar)

})
