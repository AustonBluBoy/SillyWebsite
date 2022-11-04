class TypeWriter {
    txt: string;
    txtElement: HTMLElement;
    shouldRemoveTxt = true;
    currTxt = '';
    deleting=false;
    cursor = true;
    cursorNum = 2;
    cursorNumCurr = 0;
    constructor(txt: string, waitNum: BigInteger, shouldRemoveTxt: boolean, txtElement: HTMLElement){
        
        var waitSpaces: string = "";
        var i;
        for(i = 0; i <= waitNum; i++) {
            waitSpaces += " ";
        }

        this.txt = waitSpaces + txt + waitSpaces;
        this.txtElement = txtElement;
        this.shouldRemoveTxt=shouldRemoveTxt;
        this.currTxt = '';
        this.deleting=false;
        this.cursor = true;
        this.cursorNum = 2;
        this.cursorNumCurr = 0;
    }

    type() {

        if(this.cursorNumCurr>=this.cursorNum){
            this.cursorNumCurr=0;
            this.cursor=!this.cursor;
        } else {
            this.cursorNumCurr++;
        }
    
        if(this.deleting && this.shouldRemoveTxt){
            this.currTxt = this.txt.substring(0, this.currTxt.length - 1);
        }else{
            this.currTxt = this.txt.substring(0, this.currTxt.length + 1);
        }
    
        if(this.txtElement!=null){
            if(this.cursor){
                this.txtElement.innerHTML = this.currTxt + "|";
            } else {
                this.txtElement.innerHTML = this.currTxt;
            }
        }
    
    
        if(this.currTxt.length==this.txt.length) {
            this.deleting=true;
        } else if(this.currTxt.length<=0){
            this.deleting=false;
        }
    
        setTimeout(() => this.type(), 100);
    
    }
    

}