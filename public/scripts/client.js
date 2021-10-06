/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(() => {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = (tweets) => {
    return tweets.map(tweet => $("#tweet-container").append(createTweetElement(tweet)));
  };
  
  const createTweetElement = (tweet) => {
    const $tweet = $(`<article class="tweet"></article>`);
    const $header = $(`<header><div><i class="fas fa-user-tie"></i><h4>${tweet.user.name}</h5></div><p>${tweet.user.handle}</p></header>`);
    const $content = $(`<div><h4>${tweet.content.text}</h4></div>`);
    const $footer = $(`<footer><h6>${timeago.format(tweet.created_at)}</h6><div><i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div></footer>`);
    $tweet.append($header, $content, $footer);
    return $tweet;
  };
  
  renderTweets(data);
});
