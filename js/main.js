if (window.innerWidth < 768) {
  document.querySelectorAll(".menu").forEach(function(element) {
    element.style.display = "none";
  });
  document.querySelectorAll(".navbar-login").forEach(function(element) {
    element.style.display = "none";
  });
}

window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
    document.querySelectorAll(".menu").forEach(function(element) {
      element.style.display = "none";
    });
    document.querySelectorAll(".navbar-login").forEach(function(element) {
      element.style.display = "none";
    });
  }
});

document.querySelector("nav .hamburger").addEventListener("click", function() {
  document.querySelectorAll(".menu").forEach(function(element) {
    element.style.display = (element.style.display === "none") ? "block" : "none";
  });
  document.querySelectorAll(".navbar-login").forEach(function(element) {
    element.style.display = (element.style.display === "none") ? "block" : "none";
  });
});

//////// carousel /////
$(document).ready(function () {
  $('.speciality-carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 50,
    stagePadding: 50,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      577: {
        items: 3,
        nav: false
      },
      769: {
        items: 4,
        nav: false
      },
      992: {
        items: 6,
        nav: false,
      }
    }
  });
  $('.doctor-carousel').owlCarousel({
    items: 3,
    margin: 50,
    stagePadding: 50,
    mouseDrag: true,
    touchDrag: true,
 
    responsive: {
      0: {
        items: 1,
      },
      577: {
        items: 2,
        nav: false
      },
      769: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false,
      }
    }
  })
});

//////// blog-box //////

const blogBox = document.querySelectorAll(".blog-box-shadow");

blogBox.forEach(service => {
  service.addEventListener('mouseover', () => {
    service.style.transform = 'scale(1.02)';
  });

  service.addEventListener('mouseout', () => {
    service.style.transform = 'scale(1)';
  });
});