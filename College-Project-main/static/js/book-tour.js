// Book tour page specific scripts
function revealOnScroll() {
  var reveals = document.querySelectorAll('.tour-info-reveal, .form-reveal, .book-form-intro');
  var windowHeight = window.innerHeight;

  reveals.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;
    var revealPoint = 50;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('reveal-active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function updateActiveNavLink() {
  var navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // On booking page - keep Destinations link yellow
  navLinks[1].classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
  });
} else {
  updateActiveNavLink();
}
