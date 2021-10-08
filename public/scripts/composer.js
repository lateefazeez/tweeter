$(() => {

  const showTextArea = () => {
    $("#compose").toggle("slow");
    const $inputField = $("form").children("#tweet-text");
    $inputField.focus();
  };

  //toggle the new-tweet textarea
  $("#nav-rights").on("click", function() {
    showTextArea();
  });

  //show the scroll button
  $(window).on("scroll", function() {
    $("#move-up").css("visibility", "visible");
    // $("#nav").css("background-color", "rgba(0, 0, 0, 0)");
  });

  //move back up on scrtoll and show the input form
  $("#move-up").on("click", () => {
    $("#move-up").css("visibility", "hidden");
    $("html").animate({scrollTop:0}, "slow");
    showTextArea();
  });

});