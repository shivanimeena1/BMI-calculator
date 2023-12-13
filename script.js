function calculateBMI(weight,height) {
  var weight=document.getElementById("weight").value;
var height=document.getElementById("height").value;
var result=document.getElementById("result");

  var bmi;
  bmi=weight/height;
  result.textContent=bmi;
  }
