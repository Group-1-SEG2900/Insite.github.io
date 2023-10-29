window.onload = function() {
    var images = document.querySelectorAll('#image-matrix img');
    var classes = ['slideInFromLeft', 'slideInFromRight', 'slideInFromTop', 'slideInFromBottom'];

    images.forEach(function(image) {
        var randomIndex = Math.floor(Math.random() * classes.length);
        var randomClass = classes[randomIndex];
        image.classList.add(randomClass);
    });
};