function dis(val) {
    document.getElementById('textInput').value+=val;
    document.getElementById('textInput').focus();
}

function equal(val){
    let x = document.getElementById('textInput').value;
    let y = eval(x);
    document.getElementById('resultInput').value = y;
}


function isInputNumber(evt){
                
    var ch = String.fromCharCode(evt.which);

    if((/[a-z]/.test(ch))){
        evt.preventDefault();
    }
    
}

function clearMe() {
    document.getElementById('textInput').value = "";
    document.getElementById('resultInput').value = "";
}