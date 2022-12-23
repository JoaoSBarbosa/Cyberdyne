window.onload = function () {
  document.querySelector(".menu-openet").addEventListener("click", function () {
    if (document.querySelector("nav").style.display == "block") {
      document.querySelector("nav").style.display = 'none';
    } else {
      document.querySelector("nav").style.display = "block";
    }
  });
};


/* banners*/
var indexb = 0;
banners();
function banners(){
  var i;
  var x = document.getElementsByClassName('slide-banner');
  for (i =0; i< x.length; i++){
    x[i].style.display = "none";

  }
  indexb++;
  if(indexb > x.length){
    indexb =1
  }
  x[indexb-1].style.display = "block";  
  setTimeout(banners, 2200);
}

/* avaliação*/

var indexr = 0;
reviews();
function reviews(){
  var i;
  var x = document.getElementsByClassName('slide-reviews');
  for (i =0; i< x.length; i++){
    x[i].style.display = "none";

  }
  indexr++;
  if(indexr > x.length){
    indexr =1
  }
  x[indexr-1].style.display = "block";  
  setTimeout(reviews, 2200);
}

/* tec*/

var indext = 0;
tech();
function tech(){
  var i;
  var x = document.getElementsByClassName('slide-tech');
  for (i =0; i< x.length; i++){
    x[i].style.display = "none";

  }
  indext++;
  if(indext > x.length){
    indext =1
  }
  x[indext-1].style.display = "block";  
  setTimeout(tech, 1200);
}