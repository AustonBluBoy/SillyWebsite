function runWhenDoneLoading() {
    var iframes = document.getElementsByClassName('latestVideoEmbed');
    videoID = "";
    for (var i = 0, len = iframes.length; i < len; i++) {
        convertToLink(iframes[i]);
    }
}
var videoID;
document.addEventListener('DOMContentLoaded', runWhenDoneLoading);
var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

function setVideoID(iframe) {
    $.getJSON(reqURL + iframe.getAttribute('cid'), function(data) {
        var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
        var link = data.items[videoNumber].link;
        videoID = link.substr(link.indexOf("=") + 1);
        setiframe(iframe, videoID);
    });
}

function setiframe(iframe, vidID) {
    var thumbnailReqURL = "https://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
    iframe.setAttribute("src", thumbnailReqURL);
    iframe.setAttribute("href", "https://www.youtube.com/watch?v=" + videoID);
}

function convertToLink(iframe) {
    setVideoID(iframe);
    var thumbnailReqURL = "https://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
}