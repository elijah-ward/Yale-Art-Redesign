$(document).ready(function(){
  $('.carousel').carousel(
    {
      carouselWidth:930,carouselHeight:330,directionNav:true,reflection: false,shadow:true,buttonNav:'bullets'
  });
});

$(document).ready(function(){
  var i = 0;
  for (i = 0; i < studentsdatabase.students.length; i++) {
    document.getElementById("name" + (i+1)).innerHTML = studentsdatabase.students[i].name;
    document.getElementById("bio" + (i+1)).innerHTML = studentsdatabase.students[i].biography;
  }
});
