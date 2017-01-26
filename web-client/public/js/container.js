$(function () {

  $(".boundBoxSize").on("click", function () {
    var currentValue = $(this).val();
    var grnsightContainerClass = "grnsight-container " + currentValue;
    if (!$(".grnsight-container").hasClass(currentValue)) {
      $(".grnsight-container").attr("class", grnsightContainerClass);
      $("#reload").trigger("click");
      if (currentValue === "containerInfinite") {
          $(".grnTest").css("height", "720px");
          $(".grnTest").css("width", "1280px");
          let halfVisibleHeight =
                ($(".grnsight-container").height() / 2) -
                ($(".grnTest").height() / 2);
          let halfVisibleWidth =
                      ($(".grnsight-container").width() / 2) -
                      ($(".grnTest").width() / 2);
          $(".grnTest").scrollTop(halfVisibleHeight);
          $(".grnTest").scrollLeft(halfVisibleWidth);
          $(".grnTest").css("overflow", "auto");
          $(".grnTest").addClass("grnTestNoScroll");
          $("#enableScroll").prop("disabled", true);
      } else if ($(".grnTest").hasClass("grnTestNoScroll")) {
          $(".grnTest").removeClass("grnTestNoScroll");
          console.log("Have scroll now please.");
          $("#enableScroll").prop("disabled", false);
      }
    };
  });

  $("#enableScroll").on("click", function () {
    var enabled = $(this).prop("checked");
    $(".grnTest").css("overflow", (enabled ? "auto" : "visible"));
    $(".grnTest").css("height", (enabled ? "" : $(".grnsight-container").height()));
    $(".grnTest").css("width", (enabled ? "" : $(".grnsight-container").width()));
  });

})
