// Phone Number Validation
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
  const form = document.querySelector('.book-tour-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      if (!validatePhone()) {
        e.preventDefault();
        return false;
      }
    });
  }
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  
  if (!phone) {
    if (phoneError) phoneError.textContent = 'Phone number is required';
    return false;
  }
  
  if (!/^[0-9]{10}$/.test(phone)) {
    if (phoneError) phoneError.textContent = 'Phone number must be exactly 10 digits';
    return false;
  }
  
  if (phoneError) phoneError.textContent = '';
  return true;
}
