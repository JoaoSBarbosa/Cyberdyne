window.onload = function () {
  document.querySelector(".menu-openet").addEventListener("click", function () {
    if (document.querySelector("nav").style.display == "block") {
      document.querySelector("nav").style.display = 'none';
    } else {
      document.querySelector("nav").style.display = "block";
    }
  });
};

