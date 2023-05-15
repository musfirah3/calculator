function newNum(num){
    document.getElementById('result').value+=num;
}
function getResult(){
    document.getElementById('result').value=eval(document.getElementById('result').value)
}
function remove(){
    document.getElementById('result').value=''
}
function clearAll(){
    var res=document.getElementById('result').value;
    document.getElementById('result').value=document.getElementById('result').value.slice(0,res.length -1);
}
function xSquare(){
    var multi=document.getElementById('result').value*document.getElementById('result').value
    document.getElementById('result').value=multi;
}
function xCube(){
    var multi=document.getElementById('result').value*document.getElementById('result').value*document.getElementById('result').value;
    document.getElementById('result').value=multi;
}
function divide(){
    document.getElementById('result').value=eval(1/document.getElementById('result').value);
}
function percent(){
    document.getElementById('result').value=eval(document.getElementById('result').value/100);
    
}
function radian(){
    document.getElementById('result').value=eval(document.getElementById('result').value*(Math.PI/180));
}
function degree(){
    document.getElementById('result').value=eval(document.getElementById('result').value*(180/Math.PI));
}

function factorial() {
    var result = 1;
    if (document.getElementById('result').value === 0) {
      document.getElementById('result').value = "1";
    } else if (document.getElementById('result').value < 0) {
      document.getElementById('result').value = "undefined";
    } else {
      var result = 1;
      for (var i = document.getElementById('result').value; i > 0; i--) {
        result = result * i;
      }
      document.getElementById('result').value = result;
    }
  }
  function exponent() {
    document.getElementById('result').value = document.getElementById('result').value + "^";
  }