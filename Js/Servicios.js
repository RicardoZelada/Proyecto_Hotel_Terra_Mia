//document.addEventListener("DOMContentLoaded", function(event){

let container_1 = document.getElementById("container_one");
let container_2 = document.getElementById("container_two");
let btn1 = document.getElementById("btnone");
let btn2 = document.getElementById("btntwo");



function payServices(){
        container_1.style.transform = "translateX(0)";
        container_2.style.transform = "translateX(100%)";
        btn1.style.color = "#FC9A32";
        btn2.style.color = "#000000";
        container_1.style.transitionDelay = "0.3s";
        container_2.style.transitionDelay = "0s";
    }

function addServices(){
        container_1.style.transform = "translateX(100%)";
        container_2.style.transform = "translateX(0)";
        btn2.style.color = "#FC9A32";
        btn1.style.color = "#000000";
        container_1.style.transitionDelay = "0s";
        container_2.style.transitionDelay = "0.3s";
    }
//});