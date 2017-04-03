$(document).ready(function(){
  $('.carousel').carousel({
    carouselWidth:930,
    carouselHeight:330,
    directionNav:true,
    shadow:true,
    buttonNav:'bullets'
  });
});

$('#prevButton').click(function() {
  alert("Test");
  $('#myCarousel').carousel('prev');
});

$('.right carousel-control').click(function() {
  $('#myCarousel').carousel('next');
});

function clickPrev() {
  $('#myCarousel').carousel('prev');
}

$(function() {
    $( "#show-option" ).tooltip({
        show: {
        effect: "slideDown",
        delay: 300
        }
    });
});
