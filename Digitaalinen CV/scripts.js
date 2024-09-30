document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidenav a');

  // Navigaatio smooth scroll
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();  
          const targetId = this.getAttribute('href').substring(1);  
          const targetSection = document.getElementById(targetId);  

          window.scrollTo({
              top: targetSection.offsetTop, 
              behavior: 'smooth' 
          });
      });
  });

  // Hakee napin
  const myButton = document.getElementById("myBtn");

  //Näyttää napin kun vieritetään alas
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
          myButton.style.display = "block";  // Näyttää napin
      } else {
          myButton.style.display = "none";  // Piilottaa napin
      }
  }

  // Palauttaa sivun alkuun
  myButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,  
          behavior: 'smooth'  
      });
  });
});
