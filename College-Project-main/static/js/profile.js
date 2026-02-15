
// Phone validation - shared across forms
const phoneInput = document.getElementById('phoneInput');
const phoneError = document.getElementById('phoneError');

if (phoneInput) {
  // Allow only numbers
  phoneInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Clear error when user types
    if (phoneError) phoneError.textContent = '';
  });

  // Validate on blur
  phoneInput.addEventListener('blur', function() {
    validatePhone();
  });

  // Validate on form submission
  const form = phoneInput.closest('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      if (phoneInput.value && !validatePhone()) {
        e.preventDefault();
        return false;
      }
    });
  }
}

function validatePhone() {
  const phone = phoneInput?.value?.trim();
  
  if (!phone) {
    return true; // Allow empty if not required
  }
  
  if (!/^[0-9]{10}$/.test(phone)) {
    if (phoneError) phoneError.textContent = 'Phone must be exactly 10 digits';
    return false;
  }
  
  if (phoneError) phoneError.textContent = '';
  return true;
}


// Profile page specific scripts
document.addEventListener('DOMContentLoaded', function() {
  // Handle menu button clicks
  const menuButtons = document.querySelectorAll('.menu-btn');
  menuButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      menuButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Find corresponding card and show it
      const cardId = this.getAttribute('data-card') || this.getAttribute('data-tab');
      if (cardId) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove('active'));
        const targetCard = document.getElementById(cardId);
        if (targetCard) {
          targetCard.classList.add('active');
        }
      }
    });
  });
  
  // Close flash messages
  const flashCloseButtons = document.querySelectorAll('.flash-close');
  flashCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
    });
  });
});

// Handle user logout with confirmation (green success bar)
function handleUserLogout() {
  if (typeof showLogoutConfirm === 'function') {
    showLogoutConfirm((confirmed) => {
      if (confirmed) {
        showSuccessBar('Logging out...', 1500, { 
          color: 'green', 
          size: 'small',
          icon: 'fa-sign-out-alt'
        });
        setTimeout(() => {
          window.location.href = '/logout';
        }, 1500);
      }
    });
  } else {
    // Fallback to confirm dialog if showLogoutConfirm is not available
    if (confirm('Logout from IndiaTour?')) {
      window.location.href = '/logout';
    }
  }
}

// Set up logout button handlers
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutBtnMobile = document.getElementById('logoutBtnMobile');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleUserLogout();
    });
  }
  
  if (logoutBtnMobile) {
    logoutBtnMobile.addEventListener('click', function(e) {
      e.preventDefault();
      handleUserLogout();
    });
  }
});
