var swiper = new Swiper(".swiper", {
        loop: true, // Faz o carrossel voltar ao início após a última imagem
        effect: 'fade', // Ativa o efeito fade
        autoplay: {
            delay: 4000, // Tempo entre as transições (5 segundos)
        },
        speed: 3000, // A transição vai durar 2 segundos
        pagination: {
            el: ".swiper-pagination", // Exibe os controles de navegação
            clickable: true, // Torna a paginação clicável
        },
        fadeEffect: {
            crossFade: true, // Faz o efeito de transição suave entre as imagens
        },
        breakpoints: {
            // Quando a largura da janela for >= 320px
            320: {
                slidesPerView: 1, // Exibe 1 slide por vez
                spaceBetween: 18, // Espaço entre os slides
            },
            // Quando a largura da janela for >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 18,
            },
            // Quando a largura da janela for >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            }
        }
    });

