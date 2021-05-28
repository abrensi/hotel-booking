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
  
  var menuButton = $(".menu-button");
    menuButton.on("click", function () {
      console.log("Клик")
      $(".nav-bottom").toggleClass("nav-bottom--visible");
      $("body").toggleClass("no-scroll");
    });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});

$(document).keydown(function (e) {
  if (e.keyCode === 27) {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog') 
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
