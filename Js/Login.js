const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


document.addEventListener("DOMContentLoaded", function(event) {
  Swal.fire({
      
      title: 'Disculpa las Molestias',
      text: 'Esta pagina esta siendo remodelada para tener una mejor experincia, Gracias',
      imageUrl: '../Img/Logo_Terra_Mia.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      
    })
});