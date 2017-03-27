
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

$(function() {
    // use event delegation
    $(document).on('click','#menu-item a', function() {
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          if (this.innerHTML == "All") {
            tr[i+1].style.display = "";
          }
          else {
            if (coursesdatabase.courses[i].program == this.innerHTML){
              tr[i+1].style.display = "";
            }
            else {
              tr[i+1].style.display = "none";
            }
        }
        }
    });
});

$(function() {
    // use event delegation
    $(document).on('click','#menu-item2 a', function() {
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          if (this.innerHTML == "All") {
            tr[i+1].style.display = "";
          }
          else {
            if (this.innerHTML.indexOf(coursesdatabase.courses[i].courseCredit) >-1){
              tr[i+1].style.display = "";
            }
            else {
              tr[i+1].style.display = "none";
            }
        }
        }
    });
});


function createTable() {
  var i = 0;

  var table = document.getElementById('myTable');
  for (i = 0; i < coursesdatabase.courses.length; i++) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = coursesdatabase.courses[i].courseCode;
    cell2.innerHTML = coursesdatabase.courses[i].courseName;
    cell3.innerHTML = coursesdatabase.courses[i].courseCredit + " Credits";
    cell4.innerHTML = coursesdatabase.courses[i].instructor;
  }
}


$(function() {
    // use event delegation
    $(document).on('click','#myTable tr', function() {
        var index = $(this).index();
        document.getElementById("course_info").innerHTML = coursesdatabase.courses[index-1].courseCode + ": " + coursesdatabase.courses[index-1].courseName;
        document.getElementById("course_description").innerHTML = coursesdatabase.courses[index-1].description + '<br/><Br/><b>' + "Instructor: " + '</b>' + coursesdatabase.courses[index-1].instructor;
    });
});
