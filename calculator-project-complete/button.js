let str = "";
function calculate(value){
    if(value == "="){
        let result = eval(str);
        str = result;
    }
    else if(value == "CLR"){
        str = "";
    }
    else{
        str = str + value;
    }
    document.getElementById("display").innerHTML = str;
}