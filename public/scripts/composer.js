$(() => {

  const showTextArea = () => {
    $("#compose").toggle("slow");
    const $inputField = $("form").children("#tweet-text");
    $inputField.focus();
  };

  const showNavBar = () => {
    $("#nav-rights").css("display", "flex");
    $("#nav").css("background-color", "#4056a1");
  };

  //toggle the new-tweet textarea
  $("#nav-rights").on("click", function() {
    showTextArea();
  });

  //show the scroll button
  $(window).on("scroll", function() {
    $("#nav-rights").css("display", "none");
    $("#move-up").css("visibility", "visible");
    $("#nav").css("background-color", "rgba(0, 0, 0, 0)");
  });

  $("#move-up").on("click", () => {
    $("html").animate({scrollTop:0}, "slow");
    showNavBar();
    showTextArea();
  });
});