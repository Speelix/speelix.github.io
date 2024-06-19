function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks.style.display === 'block') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'block';
    }
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
