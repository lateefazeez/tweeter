$(document).ready(function() {
  $("#tweet-text").on("input", function(e) {
    const tweetLength = $(this).val().length;
    const countDown = 140 - tweetLength;
    let $counter = $(this).parent("form").children(".tweet-control").children(".counter");

    // Make counter turn red color when input length is more than 140
    if (tweetLength > 140) {
      $counter.addClass("red");
    } else {
      $counter.removeClass("red");
    }
    $counter.val(countDown);
    
  });
});