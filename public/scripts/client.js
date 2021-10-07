/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(() => {
  // Fake data taken from initial-tweets.json

  const loadTweets = () => {
    const url = "http://localhost:8080/tweets";

    //fetch all tweets from the tweets page route
    $.ajax({
      url: url,
      method: "GET"
    })
      .then(data => {
        console.log(data);
        renderTweets(data);
      })
      .catch(err => console.log(err));
  };
  loadTweets();

  $("form").on("submit", function(e) {
    e.preventDefault();
    const $inputField = $(this).children("#tweet-text");

    //Validation => ESLint does not allow prompt so I used Display instead
    //display an error for validation when no tweets or tweets more than 140 characters
    if ($inputField.val() === "" || $inputField.val() === null) {
      const $error = $("<h4>Your tweet is empty, please write a tweet</h4>");
      $error.addClass("red");
      $("#error").append($error);
      return;
    } else if ($inputField.val().length > 140) {
      const $error = $("<h4>Only 140 characters are allowed as tweets, please adjust your tweet</h4>");
      $error.addClass("red");
      $("#error").append($error);
      return;
    }
    const $data = $(this).serialize();
    $("#error").children("h4").remove();
    $inputField.val("");
    $inputField.focus();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $data
    })
      .then(data => {
        loadTweets();
        console.log(data);
      })
      .catch(error => console.log(error));
  });

  const renderTweets = (tweets) => {
    return tweets.forEach(tweet => $("#tweet-container").prepend(createTweetElement(tweet)));
  };
  
  const createTweetElement = (tweet) => {
    const $tweet = $(`<article class="tweet"></article>`);
    const $header = $(`<header><div><img src="${tweet.user.avatars}"><h4>${tweet.user.name}</h5></div><p>${tweet.user.handle}</p></header>`);
    const $content = $(`<div><h4>${tweet.content.text}</h4></div>`);
    const $footer = $(`<footer><h6>${timeago.format(tweet.created_at)}</h6><div><i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div></footer>`);
    $tweet.append($header, $content, $footer);
    return $tweet;
  };
  
  
});
