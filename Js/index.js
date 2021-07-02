
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

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    }
    );

    $(document).ready(function(){
        $('.menu-toggle').click(function(){
            $('.menu-toggle').toggleClass('active');
            $('.nav').toggleClass('show')
        })
    })


      document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '.splide',{
      autoplay:"true",
      type:"loop",
      width: "100%"
    } ).mount();
	} );
      
    