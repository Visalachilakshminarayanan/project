
    filterSelection("All")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("product");
var btns = btnContainer.getElementsByClassName("imgfilter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function orderscrollfun(){
    window.location.href="contact";
}
function callscroll() {
  window.scroll(0, 650);
}

/*****************search button image filter **********/
var searchbox = document.getElementById("search");
var searchbtn = document.getElementById("search-item");

searchbtn.addEventListener("click",scrolldowntoproduct);

function scrolldowntoproduct(){
  window.scroll(0,2050);
  var searchinput = searchbox.value;
  var se = searchinput.toUpperCase();
  filterSelection(se);
}