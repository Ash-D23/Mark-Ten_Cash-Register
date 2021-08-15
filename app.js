var bill = document.getElementById("bill")
var cash = document.getElementById("cash")

var btn = document.getElementById("mybtn")

var output = document.querySelector(".output")

btn.addEventListener("click", calculatenotes)

function calculatenotes(){
  var notes=[2000,500,100,20,10,5,1]
  var values=[]
  var current=Number(cash.value)
  var amount=Number(bill.value)

  if(isNaN(current)){
    alert("Enter Cash")
    return
  }
  if(isNaN(amount)){
    alert("Enter Bill")
    return
  }

  if (current === amount){
    alert("0 notes as bill and cash is equal")
  }
  if (current < amount){
    alert("Cash is less than bill")

  }else{
    current=current-amount

    for(var i=0; i<notes.length; i++){
      if (current>=notes[i]){

        values.push(Math.trunc(current/notes[i]))
        current=current%notes[i]
      }
      else{
        values.push(0)
      }
    }

  }
  output.classList.remove("hide");
  displayoutput(values)

}

function displayoutput(values){
  //var element = document.getElementById("myDIV");
  //element.classList.add("mystyle")
  console.log(values)
  var rows = document.querySelectorAll(".table-values")

  for(var i=0; i<rows.length;i++){
    rows[i].innerText = values[i]
  }
}
