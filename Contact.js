//Gosho, delete all the code is this file and put your code here.

//Example 1
function ChangeText() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function ChangeStyle() {
  for (var i = 0; i < 100; i++) {
    document.getElementById("style").style.fontSize="50px"+i;
  }
}


function numberValidation() {
    var x, text;
    x = document.getElementById("number").value;
    if (x<1||x>10) {
        text= "Input not valid";
    }
    else {
      text = "Input valid";
    }
    document.getElementById("num").innerHTML=text;
}
