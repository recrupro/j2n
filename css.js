// Smooth scrolling effect for navigation links
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 100,
      },
      1000,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
  });
});
