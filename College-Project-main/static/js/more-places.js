// More places page specific scripts
function updateActiveNavLink() {
  var navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // On more-places page - keep More Places link yellow
  navLinks[2].classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
  });
} else {
  updateActiveNavLink();
}
