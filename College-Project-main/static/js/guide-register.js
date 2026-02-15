
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


// Guide register page specific scripts
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.guide-register-form') || document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Any custom guide register validation can be added here
    });
  }
});
