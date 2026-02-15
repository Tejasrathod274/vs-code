// Dropdown toggle function
function toggleDropdown() {
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

// Toggle menu for mobile
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

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
        if (typeof showSuccessBar === 'function') {
          showSuccessBar('Logging out...', 2000);
        } else {
          showToast('Logging out...', 'success');
        }
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
  });
} else {
  updateNavAuth();
}
