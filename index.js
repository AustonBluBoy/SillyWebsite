var welcomeTW;
var austonSentImgTW;
function runWhenDoneLoading() {
    welcomeTW = new TypeWriter("Welcome to Vekwrite", 12, false, document.getElementById("welcomeTW"));
    austonSentImgTW = new TypeWriter("Auston sent an image and before I saw it, I said that whatever it was, I was gonna put it on the website. -Endode", 12, false, document.getElementById("austonSentImgTW"));
    welcomeTW.type();
    austonSentImgTW.type();
}
document.addEventListener('DOMContentLoaded', runWhenDoneLoading);
