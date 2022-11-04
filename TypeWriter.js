var TypeWriter = /** @class */ (function () {
    function TypeWriter(txt, waitNum, shouldRemoveTxt, txtElement) {
        this.shouldRemoveTxt = true;
        this.currTxt = '';
        this.deleting = false;
        this.cursor = true;
        this.cursorNum = 2;
        this.cursorNumCurr = 0;
        var waitSpaces = "";
        var i;
        for (i = 0; i <= waitNum; i++) {
            waitSpaces += " ";
        }
        this.txt = waitSpaces + txt + waitSpaces;
        this.txtElement = txtElement;
        this.shouldRemoveTxt = shouldRemoveTxt;
        this.currTxt = '';
        this.deleting = false;
        this.cursor = true;
        this.cursorNum = 2;
        this.cursorNumCurr = 0;
    }
    TypeWriter.prototype.type = function () {
        var _this = this;
        if (this.cursorNumCurr >= this.cursorNum) {
            this.cursorNumCurr = 0;
            this.cursor = !this.cursor;
        }
        else {
            this.cursorNumCurr++;
        }
        if (this.deleting && this.shouldRemoveTxt) {
            this.currTxt = this.txt.substring(0, this.currTxt.length - 1);
        }
        else {
            this.currTxt = this.txt.substring(0, this.currTxt.length + 1);
        }
        if (this.txtElement != null) {
            if (this.cursor) {
                this.txtElement.innerHTML = this.currTxt + "|";
            }
            else {
                this.txtElement.innerHTML = this.currTxt;
            }
        }
        if (this.currTxt.length == this.txt.length) {
            this.deleting = true;
        }
        else if (this.currTxt.length <= 0) {
            this.deleting = false;
        }
        setTimeout(function () { return _this.type(); }, 100);
    };
    return TypeWriter;
}());
