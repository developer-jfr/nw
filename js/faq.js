document.querySelectorAll('.faq-card').forEach(element => {
    element.querySelector('.faq-hide').addEventListener('click', function(event) {
        element.classList.toggle('active');
    })
})