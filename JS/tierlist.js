// tierlist.js

document.addEventListener('DOMContentLoaded', function() {
    const descriptionBox = document.getElementById('description-box');
    const tierItems = document.querySelectorAll('.tier-item img');

    tierItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            descriptionBox.innerHTML = item.getAttribute('data-description');
            descriptionBox.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            descriptionBox.style.display = 'none';
        });
    });
});
