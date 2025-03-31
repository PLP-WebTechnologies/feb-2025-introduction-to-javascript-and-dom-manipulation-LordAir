// Change text content dynamically
document.getElementById('text-changer').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = 'Text successfully changed using JavaScript!';
    dynamicText.classList.add('highlight');
});

// Modify CSS styles via JavaScript
document.getElementById('style-demo').addEventListener('click', function() {
    this.style.backgroundColor = '#d4edda';
    this.style.borderColor = '#c3e6cb';
    this.style.color = '#155724';
    this.textContent = 'Styles changed successfully!';
});

// Add/remove element when button is clicked
document.getElementById('toggle-element').addEventListener('click', function() {
    const specialMessage = document.getElementById('special-message');
    specialMessage.classList.toggle('hidden');
    
    // Change button text based on state
    this.textContent = specialMessage.classList.contains('hidden') 
        ? 'Show Special Message' 
        : 'Hide Special Message';
});

// Additional dynamic interaction
document.getElementById('main-heading').addEventListener('mouseover', function() {
    this.style.color = '#007bff';
});

document.getElementById('main-heading').addEventListener('mouseout', function() {
    this.style.color = '';
});
