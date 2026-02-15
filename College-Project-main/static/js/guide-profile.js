
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

// Guide profile page specific scripts
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
});