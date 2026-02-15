// Success Message Bar Component - Enhanced
function showSuccessBar(message, duration = 3500, options = {}) {
  // Default options
  const config = {
    color: options.color || 'green', // 'green' or 'yellow'
    size: options.size || 'normal',   // 'normal' or 'small'
    icon: options.icon || 'fa-check-circle'
  };

  // Remove existing success bar if any
  const existingBar = document.querySelector('.success-bar');
  if (existingBar) {
    existingBar.remove();
  }

  // Create success bar element
  const bar = document.createElement('div');
  bar.className = `success-bar success-bar-${config.color} ${config.size === 'small' ? 'success-bar-small' : ''}`;
  bar.innerHTML = `
    <i class="fas ${config.icon}"></i>
    <span>${message}</span>
  `;

  // Insert after navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.after(bar);
  } else {
    document.body.prepend(bar);
  }

  // Auto-hide after duration
  setTimeout(() => {
    bar.classList.add('hide');
    setTimeout(() => bar.remove(), 400);
  }, duration);

  // Allow manual close on click
  bar.addEventListener('click', () => {
    bar.classList.add('hide');
    setTimeout(() => bar.remove(), 400);
  });
}

// Confirmation dialog for logout
function showLogoutConfirm(callback) {
  const confirmBox = document.createElement('div');
  confirmBox.className = 'logout-confirm';
  confirmBox.innerHTML = `
    <div class="confirm-content">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>Confirm Logout</h3>
      <p>Are you sure you want to logout?</p>
      <div class="confirm-buttons">
        <button class="confirm-yes">Yes, Logout</button>
        <button class="confirm-no">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(confirmBox);

  // Add event listeners
  confirmBox.querySelector('.confirm-yes').addEventListener('click', () => {
    confirmBox.remove();
    if (callback) callback(true);
  });

  confirmBox.querySelector('.confirm-no').addEventListener('click', () => {
    confirmBox.remove();
    if (callback) callback(false);
  });

  // Close on outside click
  confirmBox.addEventListener('click', (e) => {
    if (e.target === confirmBox) {
      confirmBox.remove();
      if (callback) callback(false);
    }
  });
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.showSuccessBar = showSuccessBar;
  window.showLogoutConfirm = showLogoutConfirm;
}
