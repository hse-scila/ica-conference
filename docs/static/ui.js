$(".ui.dropdown").dropdown();

$(".ui.sidebar")
  .sidebar("attach events", ".toc.item")
  .sidebar("attach events", ".sidebar a.item");

$(document).ready(function () {
  $("#hero-section").visibility({
    once: false,
    onBottomPassed: function () {
      $("#computer-menu")
        .removeClass("secondary")
        .addClass("inverted grey fixed")
        .transition("fade in");
      $("#computer-logo").removeClass("small").addClass("tiny");
    },
    onBottomPassedReverse: function () {
      $("#computer-menu")
        .addClass("secondary")
        .removeClass("inverted grey fixed");
      $("#computer-logo").removeClass("tiny").addClass("small");
    },
  });

  $('#chairtoast').toast({displayTime: 0});
});

$('.menu > a[class="item"]').click(function () {
  elem = $(this).attr("href");
  height = $(elem).height() * 2;
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(elem).offset().top - height,
    },
    100
  );
});
