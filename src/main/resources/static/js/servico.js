const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,  // Quantas imagens por vez serão exibidas
    spaceBetween: 10,   // Espaçamento entre as imagens
    loop: true,         // Habilita o loop infinito
    navigation: {       // Navegação com botões
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {         // Caso queira que o carrossel seja automático
      delay: 5000,      // Tempo entre as transições
      disableOnInteraction: false,
    },
  });