 /* Preloader */
 var preloader = document.getElementById('preloader');

 window.addEventListener('load', function () {
     preloader.style.display = 'none';
 })
 /* End Preloader*/
// var typed = new Typed('.typing', {
//     strings: ["Welcome to ISDCTT", "", "Our Services", "Web Design and Development", "SEO and Graphic Design", "Video Editing , Content Solution", "Paid Add Solution"],
//     loop: true,
//     typeSpeed: 10,
//     backSpeed: 100,
//     backDelay: 2000,
// });
 /*Using Jquery Navbar */
 $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
         $('.sticky').addClass("animated fadeInDown fixed");
     } else {
         $('.sticky').removeClass("animated fadeInDown fixed");
     }
 });
 $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
         $('nav a h4').html('<img src="img/isdc-logo.png">');
     } else {
         $('nav a h4').html('ISDC Trade & Technologies');
     }
 });


 /* Barfiller */
 $(document).ready(function () {
     $('#bar1').barfiller({
         barColor: "#000045",
         duration: 2000
     });
     $('#bar2').barfiller({
         barColor: "#000045",
         duration: 2000
     });
     $('#bar3').barfiller({
         barColor: "#000045",
         duration: 2000
     });
     $('#bar4').barfiller({
         barColor: "#000045",
         duration: 2000
     });
     $('#bar5').barfiller({
         barColor: "#000045",
         duration: 2000
     });
     $('#bar6').barfiller({
         barColor: "#000045",
         duration: 2000
     });
 });

 /*End Barfiller */
 /* Owl Carouserl */
 $(document).ready(function () {
     $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         nav: false,
         autoplay: 1000,
         dot: 4,
         responsive: {
             0: {
                 items: 1
             },
             600: {
                 items: 1
             },

             1000: {
                 items: 2
             }
         }
     });
 });

 //  Isotope Js
 $(document).ready(function () {
     $('.gallerys').isotope({
         itemSelector: '.item',
         layoutMode: 'fitRows'
     });

     $('.portfolio-menu span').click(function () {
         $('.portfolio-menu span').removeClass('active');
         $(this).addClass('active');


         var selector = $(this).attr('data-filter');
         $('.gallerys').isotope({
             filter: selector
         });

         return true;
     })
 })

 // MagnificPopup
 $(document).ready(function () {
     $('.gallerys').magnificPopup({
         type: 'image',
         delegate: 'a',
         gallery: {
             enabled: true
         }

     })
 });

 // Scroll up 

let button = document.getElementById("scroll-up");

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop >400){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

function topFunc(){
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
}