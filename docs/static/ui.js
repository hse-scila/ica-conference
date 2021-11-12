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
});
