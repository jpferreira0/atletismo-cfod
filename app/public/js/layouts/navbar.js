document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    toggleButton.classList.add('toggle-button', 'closed');
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', function() {
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        toggleButton.classList.remove('open');
        toggleButton.classList.add('closed');
      } else {
        navbar.classList.add('open');
        toggleButton.classList.remove('closed');
        toggleButton.classList.add('open');
      }
    });
  });