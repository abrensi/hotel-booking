$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button__next",
      prevEl: ".hotel-slider__button__prev",
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
    spaceBetween: 15,
  });
  
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [7.575227, 79.803963],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 12,
    });
    var myPlacemark = new ymaps.Placemark(
      [7.575227, 79.803963],
      {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: "Grand Hilton Hotel",
        // Балун откроется при клике по метке.
        balloonContent: "Grand Hilton Hotel",
      },
      {
        iconColor: "#EC1F46",
      }
    );
  
    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(myPlacemark);
  }
  
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button__next",
      prevEl: ".reviews-slider__button__prev",
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
    spaceBetween: 15,
  });
  
  const menuButton = $(".menu-button");
    menuButton.on("click", function () {
      $(".nav-bottom").toggleClass("nav-bottom--visible");
      $("body").toggleClass("no-scroll");
    });

  const modalButton = $("[data-toggle=modal]");
  const closeModalButton = $(".modal__close");

  const modalOverlay = $('.modal__overlay')
  const modalDialog = $('.modal__dialog')

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  modalOverlay.on('click', closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    $("body").addClass("no__scroll");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $("body").removeClass("no__scroll");
    
  }

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      $("body").removeClass("no__scroll");
    }
  })
  AOS.init();

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlenght: "Not shorter than 2 letters!",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please specify your phone number",
        }
      }
    })
  })

  jQuery(document).ready(function() {
    $('.phone').mask('+7 (999) 999-99-99')
  })
})
