// add more stylings to navbar while scrolling 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 40){
        nav.classList.add("navbar-moved");
    }
    else{
        nav.classList.remove("navbar-moved");
    }
}


//hide navbar if a link is clicked(mobile view)
let navbar_links=document.querySelectorAll(".nav-link");
let navCollapse=document.getElementById("navbarNav");
for(link of navbar_links){
    link.addEventListener('click',function(){
        navCollapse.classList.remove("show");
    })
}

