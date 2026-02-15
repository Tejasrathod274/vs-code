// Index page specific scripts
function revealOnScroll() {
  var reveals = document.querySelectorAll('.reveal');
  var windowHeight = window.innerHeight;

  reveals.forEach(function(card, index) {
    var cardTop = card.getBoundingClientRect().top;
    var revealPoint = 50;

    if (cardTop < windowHeight - revealPoint) {
      setTimeout(function() {
        card.classList.add('active');
      }, index * 70);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Update active nav link based on scroll position or current page
function updateActiveNavLink() {
  var navLinks = document.querySelectorAll('.nav-links a');
  var path = window.location.pathname;
  
  // Remove all active classes initially
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // Set active based on current page/path
  if (path === '/' || path.indexOf('index') !== -1) {
    navLinks[0].classList.add('active');
    setupScrollNavUpdate();
  }
}

function setupScrollNavUpdate() {
  var navLinks = document.querySelectorAll('.nav-links a');
  var destinations = document.getElementById('destinations');
  var about = document.getElementById('about');
  
  if (!destinations || !about) return;
  
  window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var destPos = destinations.offsetTop - 200;
    var aboutPos = about.offsetTop - 200;
    
    navLinks.forEach(l => l.classList.remove('active'));
    
    if (scrollPos >= aboutPos) {
      navLinks[3].classList.add('active'); // About
    } else if (scrollPos >= destPos) {
      navLinks[1].classList.add('active'); // Destinations
    } else {
      navLinks[0].classList.add('active'); // Home
    }
  });
}

// About section toggle
function toggleAbout() {
  const aboutMore = document.querySelector('.about-more');
  const aboutBtn = document.querySelector('.about-btn');
  
  if (aboutMore) {
    aboutMore.classList.toggle('about-more-open');
    if (aboutBtn) {
      aboutBtn.textContent = aboutMore.classList.contains('about-more-open') ? 'Read Less' : 'Read More';
    }
  }
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
  });
} else {
  updateActiveNavLink();
}
