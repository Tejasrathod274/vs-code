function toggleDropdown() {
  // Try both old and new dropdown IDs
  var dd = document.getElementById("profileDropdown") || document.getElementById("profileDropdown");
  var ddNav = document.getElementById("dropdown-nav") || document.querySelector('.dropdown-nav');
  
  if (ddNav) {
    ddNav.classList.toggle("show");
  }
  if (dd) {
    dd.classList.toggle("show");
  }
}

// Toast notification system
function showToast(message, type = 'success') {
  type = type || 'success';
  
  // Create toast container if it doesn't exist
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
  
  container.appendChild(toast);
  
  // Remove toast after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.user-profile') && !e.target.closest('.user-profile-nav')) {
    var dd = document.getElementById("profileDropdown");
    var ddNav = document.querySelector('.dropdown-nav');
    if (dd) dd.classList.remove("show");
    if (ddNav) ddNav.classList.remove("show");
  }
});

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

// Navbar: fetch current user and show uploaded avatar in nav profile icon
function updateNavAuth() {
  var navLogin = document.getElementById('navLogin');
  var mobileNavLogin = document.getElementById('mobileNavLogin');
  var userProfile = document.getElementById('userProfile');
  
  // Set initial visibility to show login by default
  if (navLogin) navLogin.style.display = 'inline-block';
  if (mobileNavLogin) mobileNavLogin.style.display = 'block';
  if (userProfile) userProfile.style.display = 'none';
  
  fetch('/api/current_user', { credentials: 'same-origin' }).then(function(res){
    return res.json();
  }).then(function(data){
    if (!data || !data.logged_in) {
      // NOT LOGGED IN - show login buttons
      if (navLogin) navLogin.style.display = 'inline-block';
      if (mobileNavLogin) mobileNavLogin.style.display = 'block';
      if (userProfile) userProfile.style.display = 'none';
      return;
    }
    
    // LOGGED IN - show profile icon and hide login buttons
    if (navLogin) navLogin.style.display = 'none';
    if (mobileNavLogin) mobileNavLogin.style.display = 'none';
    if (userProfile) {
      userProfile.style.display = 'block';
      
      // Update avatar if uploaded
      if (data.avatar) {
        var existingImg = userProfile.querySelector('img');
        if (!existingImg) {
          var avatarHtml = '<img src="'+data.avatar+'" alt="profile" class="nav-avatar">';
          var dropdownHtml = '<div class="dropdown" id="profileDropdown"><a href="/profile">My Account</a><a href="/logout" id="logoutBtn">Logout</a></div>';
          userProfile.innerHTML = avatarHtml + dropdownHtml;
        }
      }
      
      // Attach logout handler
      var lb = document.getElementById('logoutBtn');
      if (lb) lb.onclick = function(e){ 
        e.preventDefault();
        showToast('Logging out...', 'success');
        setTimeout(() => {
          window.location.href = '/logout';
        }, 500);
      };
    }
  }).catch(function(err){
    console.log('Auth check failed:', err);
    if (navLogin) navLogin.style.display = 'inline-block';
    if (userProfile) userProfile.style.display = 'none';
  });
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateNavAuth();
    updateActiveNavLink();
  });
} else {
  updateNavAuth();
  updateActiveNavLink();
}

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
    // We're on home page - will update on scroll
    navLinks[0].classList.add('active');
    setupScrollNavUpdate();
  } else if (path.indexOf('destination') !== -1 || path.indexOf('place-detail') !== -1) {
    // On destination detail or place detail page - keep Destinations link yellow
    navLinks[1].classList.add('active');
  } else if (path.indexOf('book-tour') !== -1) {
    // On booking page - keep Destinations link yellow
    navLinks[1].classList.add('active');
  } else if (path.indexOf('more-places') !== -1) {
    navLinks[2].classList.add('active');
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
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
