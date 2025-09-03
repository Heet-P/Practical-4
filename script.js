
window.onload = function() {
    
    var hs = document.getElementsByTagName('h2');
    for (var i = 0; i < hs.length; i++) {
        var h = hs[i];
        var p = h.nextElementSibling;
        if (p && p.tagName.toLowerCase() === 'p') {
            p.style.display = 'none';
            h.style.cursor = 'pointer';
            h.onclick = (function(answer) {
                return function() {
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                    } else {
                        answer.style.display = 'block';
                    }
                }
            })(p);
        }
    }

    // Popup Example
    var popupBtn = document.getElementById('popupBtn');
    var popup = document.getElementById('popup');
    var popupClose = document.getElementById('popupClose');
    if (popupBtn && popup && popupClose) {
        popupBtn.onclick = function() {
            popup.style.display = 'block';
        };
        popupClose.onclick = function() {
            popup.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        };
    }

    var sliderCard = document.querySelector('.slider-card');
    if (sliderCard) {
        var slideIndex = 1;
        var slides = sliderCard.querySelectorAll('.mySlides');
        var dots = sliderCard.querySelectorAll('.dot');
        var prev = sliderCard.querySelector('.prev');
        var next = sliderCard.querySelector('.next');

        function showSlides(n) {
            if (slides.length === 0) return;
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            slides.forEach(function(slide) { slide.style.display = 'none'; });
            dots.forEach(function(dot) { dot.classList.remove('active'); });
            slides[slideIndex-1].style.display = 'block';
            if (dots[slideIndex-1]) dots[slideIndex-1].classList.add('active');
        }
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        if (prev && next) {
            prev.onclick = function() { plusSlides(-1); };
            next.onclick = function() { plusSlides(1); };
        }
        dots.forEach(function(dot, idx) {
            dot.onclick = function() { currentSlide(idx + 1); };
        });
        showSlides(slideIndex);
    }
}