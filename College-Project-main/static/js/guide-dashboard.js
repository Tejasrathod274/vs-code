// Guide dashboard page specific scripts
function toggleGuideUserDropdown(event) {
  event.stopPropagation();
  const dropdown = document.querySelector('.guide-dropdown-menu');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.guide-user-dropdown')) {
    const dropdown = document.querySelector('.guide-dropdown-menu');
    if (dropdown) {
      dropdown.classList.remove('show');
    }
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize any guide dashboard specific functionality
  });
}
