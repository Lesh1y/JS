var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function previousSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
