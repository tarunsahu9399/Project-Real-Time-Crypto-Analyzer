const dropdown = document.getElementById('coin-dropdown');
const options = dropdown.querySelectorAll('option');
const optionsContainer = document.createElement('div');
optionsContainer.classList.add('coin-options');

// create a mapping from the option value to its corresponding element

dropdown.parentNode.insertBefore(optionsContainer, dropdown.nextSibling);

dropdown.addEventListener('click', function() {
  optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target) && !optionsContainer.contains(event.target)) {
    optionsContainer.style.display = 'none';
  }
});








