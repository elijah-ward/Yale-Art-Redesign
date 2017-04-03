$(document).ready(function(){
  $('.carousel').carousel(
    {
      carouselWidth:930,carouselHeight:1000,directionNav:true,reflection: false,shadow:true,buttonNav:'bullets'
  });
});

$(document).ready(function(){
  var i = 0;
  for (i = 0; i < studentsdatabase.students.length; i++) {
    document.getElementById("name" + (i+1)).innerHTML = studentsdatabase.students[i].name;
    document.getElementById("program" + (i+1)).innerHTML = '<b>' + studentsdatabase.students[i].program +  '</b>';
    document.getElementById("bio" + (i+1)).innerHTML = studentsdatabase.students[i].biography;
    document.getElementById("website" + (i+1)).href = studentsdatabase.students[i].website;
  }
});
