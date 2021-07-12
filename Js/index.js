
let content_1 = document.getElementById("content_one");
let content_2 = document.getElementById("content_two");
let content_3 = document.getElementById("content_three");
let btn_1 = document.getElementById("btn_one");
let btn_2 = document.getElementById("btn_two");
let btn_3 = document.getElementById("btn_three");

function singleRoom(){
        content_1.style.transform = "translateX(0)";
        content_2.style.transform = "translateX(100%)";
        content_3.style.transform = "translateX(100%)";
        btn_1.style.color = "#FC9A32";
        btn_2.style.color = "#000000";
        btn_3.style.color = "#000000";
        content_1.style.transitionDelay = "0.3s";
        content_2.style.transitionDelay = "0s";
        content_3.style.transitionDelay = "0s";
    }

function dobleRoom(){
        content_1.style.transform = "translateX(100%)";
        content_2.style.transform = "translateX(0)";
        content_3.style.transform = "translateX(100%)";
        btn_2.style.color = "#FC9A32";
        btn_1.style.color = "#000000";
        btn_3.style.color = "#000000";
        content_1.style.transitionDelay = "0s";
        content_2.style.transitionDelay = "0.3s";
        content_3.style.transitionDelay = "0s";
    }

function familyRoom(){
        content_1.style.transform = "translateX(100%)";
        content_2.style.transform = "translateX(100%)";
        content_3.style.transform = "translateX(0)";
        btn_3.style.color = "#FC9A32";
        btn_2.style.color = "#000000";
        btn_1.style.color = "#000000";
        content_1.style.transitionDelay = "0s";
        content_2.style.transitionDelay = "0s";
        content_3.style.transitionDelay = "0.3s";
    }
//-------------------Sticky
       
        window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        });

        $(document).ready(function(){
            $('.toggle').click(function(){
                $('ul').toggleClass('active');
            })
            })
     
//-------------------Sldider Principal Index
		new Splide( '.splide',{
      autoplay:"true",
      type:"loop",
      width: "100%"
    } ).mount();

    new Splide( '.splide_1',{
      autoplay:"true",
      type:"loop",
      width: "100%"
    } ).mount();

    new Splide( '.splide_2',{
      autoplay:"true",
      type:"loop",
      width: "100%"
    } ).mount();
	



//-------------------Sldider Que Opina la Gente
  var swiper = new Swiper('.swiper-container', {
    effect: 'slide',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: true,
    autoplay: true,
    breakpoints: {
      '@0.50': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //-----------

 
