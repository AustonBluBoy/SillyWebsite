var redImposterTW: TypeWriter;

function runWhenDoneLoading() {
    redImposterTW = new TypeWriter("I'm looking for the REAL Chungus, not some red imposter!", 12, false, document.getElementById("redImposterTW"));
    redImposterTW.type();
}

document.addEventListener('DOMContentLoaded', runWhenDoneLoading);