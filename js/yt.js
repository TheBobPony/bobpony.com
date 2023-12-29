document.addEventListener('DOMContentLoaded', () => {

  // Fetch the latest video on Bob's channel to later embed it. Uses the method found at https://stackoverflow.com/a/45342740.
  var channelID = "UCAZzz2Dd9Xh6vTjNcxhqPZw";
  var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
  $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    $("#youtube_video").attr("src", "https://youtube.com/embed/" + id + "?rel=0&disablekb=1&cc_load_policy=1");
  });
});