// Guide login page specific scripts
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.guide-login-form') || document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Any custom guide login validation can be added here
    });
  }
});
