$(function () {
   $(".navbar-toggler1").on("click", function(e) {
      $(".tm-header").toggleClass("show");
      $(".nav-scroll").removeClass("show");
      e.stopPropagation();
    });
  
  $("html").click(function(e) {
    var header = document.getElementById("tm-header");

    if (!header.contains(e.target)) {
      $(".tm-header").removeClass("show");
      $(".nav-scroll").removeClass("show");
    }
  });

  $(".navbar-toggler2").on("click", function(e) {
    $(".nav-scroll").toggleClass("show");
    $(".tm-header").removeClass("show");

      e.stopPropagation();
  });
});