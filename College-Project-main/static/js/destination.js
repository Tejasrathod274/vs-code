// Destination page specific scripts
function updateActiveNavLink() {
  var navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // On destination detail or place detail page - keep Destinations link yellow
  navLinks[1].classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
  });
} else {
  updateActiveNavLink();
}
