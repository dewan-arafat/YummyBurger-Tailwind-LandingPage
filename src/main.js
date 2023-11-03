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

// menu tabs
const tabs=document.querySelectorAll(".menu_tabs ul li");
const all= document.querySelectorAll(".items_wrap");
const foods= document.querySelectorAll(".food");
const snacks= document.querySelectorAll(".snacks");
const bevarages= document.querySelectorAll(".bevarage");

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        const tabValue= tab.getAttribute("data_tabs");
        console.log(tabValue);

        all.forEach(item=>{
            item.style.display='none';
        })
        if (tabValue==='food') {
             foods.forEach(food=>{
            food.style.display='block';
        })
        }
        else if(tabValue==='snack') {
            snacks.forEach(snack=>{
           snack.style.display='block';
       })
       }
        else if(tabValue==='bevarage') {
        bevarages.forEach(bevarage=>{
        bevarage.style.display='block';
        })
        }
        else{
            all.forEach(item=>{
           item.style.display='block';
            })
            }
    })
})