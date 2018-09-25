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
// para ir a novedades
 $("#ir-novedades").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#tema1").offset().top - 250
    }, 500);
});
// para ir a categorias
$("#ir-categorias").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#tema2").offset().top -20}, 500);
});
// para ir a pie de pagina
$("#ir-pie_pagina").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#pie_pagina").offset().top}, 1500);
});
// para que se desactive la actividad del nav al presionar otra opcion
$("body").on("click",".menu a",function () {
    $("li").removeClass('activo').animate(200);
    $(this).parent().addClass('active').animate(200);
});
 //efecto al pasar sobre los temas
$(document).ready(function(){
    $(".efecto").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });
});
//efecto al pasar sobre los temas se cambia de color los textos
$(document).ready(function(){
    $("h2").hover(function(){
        //color de el texto cundo esta el puntero sobre el texto 
        $(this).css("color", "gray");
        }, function(){
            //coloor texto cuando el puntero esta fuera
        $(this).css("color", "black");
    });
});
//efecto al pasar sobre una imagen se le aplica el efecto de zoom
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

//efecto al pasar sobre una imagen sele aplica el efecto de saturacion de el header
$(document).ready(function(){
    $('.imagen').hover(function() {
        $(this).addClass('image');
    }, function() {
        $(this).removeClass('image');
    });
});
