const hamburger= document.getElementById("hamburger");
const navMenu=document.getElementById("nav-menu");
const closeBtn=document.getElementById("close-btn");
const navLink=document.querySelectorAll(".nav_link");

navLink.forEach(link=>
    link.addEventListener("click", ()=>{
        navMenu.classList.add('hidden');
    })
    )

hamburger.addEventListener("click", ()=>{
    navMenu.classList.remove('hidden');
});
closeBtn.addEventListener("click", ()=>{
    navMenu.classList.add('hidden');
})