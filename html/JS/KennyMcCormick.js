$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true, 
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
    });

    $('.prev-btn').click(function(){
        $('.carousel').slick('slickPrev');
    });

    $('.next-btn').click(function(){
        $('.carousel').slick('slickNext');
    });
});