$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }, ]
});