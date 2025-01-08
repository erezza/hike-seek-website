const navLinks = document.querySelectorAll('.navbar a');
const readMoreButton = document.querySelector('.read-more-button');
const extraText = document.querySelector('.extra-text');
const modal = document.getElementById("login-modal");
const loginBtn = document.querySelector(".header .login-btn");
const closeBtn = document.querySelector(".close");

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
 
        link.classList.add('active');
    });
});

if (readMoreButton && extraText) {
    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Button clicked!");

        extraText.classList.toggle('hidden');

        if (extraText.classList.contains('hidden')) {
            readMoreButton.textContent = 'Read more...';
        } else {
            readMoreButton.textContent = 'Read Less';
        }
    });
}
