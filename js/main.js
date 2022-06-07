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


// $(document).ready(function() {
//     $(".owl").owlCarousel({
//         items: 4,
//         loop: true,
//         nav: false,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 2
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 6
//             }
//         }
//     });
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

