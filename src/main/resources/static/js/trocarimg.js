    let slides = document.querySelectorAll('.swiper-slide');
    let index = 0;
    let tempo = 5000;
    let timer;

    function mostrarSlide(n) {
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[n].classList.add('ativo');
    }

    function mudarSlide(direcao) {
        index = (index + direcao + slides.length) % slides.length;
        mostrarSlide(index);
        resetarTimer();
    }

    function resetarTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            mudarSlide(1);
        }, tempo);
    }

    function iniciarSlide() {
        mostrarSlide(index);
        timer = setInterval(() => {
            mudarSlide(1);
        }, tempo);
    }

    iniciarSlide();