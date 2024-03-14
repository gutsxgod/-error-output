function showError() {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = 'Произошла ошибка!';
  errorContainer.style.display = 'block';
}

function clearError() {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = '';
  errorContainer.style.display = 'none';
}
