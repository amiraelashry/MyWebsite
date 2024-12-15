const images = document.querySelectorAll('.img1');
images.forEach(image => {
    image.addEventListener('click', function() {
        let message = '';  
        if (image.id === 'achievement1') {
            message = 'Certificate of CIB BANK ';
        } else if (image.id === 'achievement2') {
            message = 'Certificate of NBE BANK';
        }
        document.getElementById('message').textContent = message;
    });
});