// Client-side form validation and enhancement
document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const form = document.querySelector('form.form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      // Email validation
      const emailField = form.querySelector('#email');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('error');
        }
      }
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });
    
    // Remove error class on input
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('error');
      });
    });
  }
});
