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
      .then(data => renderTweets(data))
      .catch(err => console.log(err));
  };
  loadTweets();

  $("form").on("submit", function(e) {
    e.preventDefault();
    const $data = $(this).serialize();
    // console.log("RAW DATA: ", $(this).serialize());
    const $inputFiled = $(this).children("#tweet-text");
    $inputFiled.val("");
    $inputFiled.focus();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $data
    })
      .then(data => console.log(data))
      .catch(error => console.log(error));
  });

  const renderTweets = (tweets) => {
    return tweets.map(tweet => $("#tweet-container").append(createTweetElement(tweet)));
  };
  
  const createTweetElement = (tweet) => {
    const $tweet = $(`<article class="tweet"></article>`);
    const $header = $(`<header><div><img href="${tweet.user.avatars}"><h4>${tweet.user.name}</h5></div><p>${tweet.user.handle}</p></header>`);
    const $content = $(`<div><h4>${tweet.content.text}</h4></div>`);
    const $footer = $(`<footer><h6>${timeago.format(tweet.created_at)}</h6><div><i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div></footer>`);
    $tweet.append($header, $content, $footer);
    return $tweet;
  };
  
  
});
