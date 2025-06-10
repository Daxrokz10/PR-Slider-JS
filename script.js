 let currentIndex = 0;
        let slides = document.querySelectorAll('.slide');
        let sliderInterval;

        function showSlide(index) {
            slides.forEach((slide) => {
                slide.classList.remove('visible');
            })
            slides[index].classList.add('visible');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        function setIntervalTime(){
            const timeInput = document.getElementById('timeInput');
            const intervalTime = parseInt(timeInput.value) * 1000 || 3000;
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, intervalTime);
        }

        // Start the slider automatically on page load
        window.onload = function() {
            showSlide(currentIndex);
            setIntervalTime();
        }