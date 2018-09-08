 //tomamos la altura   
 var altura = $('nav').offset().top;
 //verificamos el scroll
 $(window).on('scroll', function(){
     //si escroll es mayor a altura
     if ( $(window).scrollTop() > altura ){
         $('nav').addClass('NavFixed');
     } else {
         $('nav').removeClass('NavFixed');
     }
 });

 $("#ir-novedades").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#tema1").offset().top - 250
    }, 500);
});

$("#ir-categorias").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#tema2").offset().top -20}, 500);
});

$("#ir-pie-pagina").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#pie_pagina").offset().top}, 1500);
});

$("body").on("click",".submenu a",function () {
    $("li").removeClass('active').animate(200);
    $(this).parent().addClass('active').animate(200);
});
