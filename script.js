$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this)
        .find("a")
        .html("<i class='fa-solid fa-bars' style='color: #ffffff'></i>");
    } else {
      $(".item").addClass("active");
      $(this)
        .find("a")
        .html("<i class='fa-solid fa-times' style='color: #ffffff'></i>");
    }
  });
});
