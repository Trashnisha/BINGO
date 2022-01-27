var divBingoCard= document.getElementById("divBingoCard")
var txtInput=document.getElementById("txtInput")
var pCardCount=document.getElementById("pCount")
var btnDraw=document.getElementById("btnDraw")
var pDrawBall=document.getElementById("pdrawBall")
let counter=0;
let card;
let ballDraw;
let cardMatrixTotal=[];
let cardMatrix;
let cardLength;
let BingoWinner=false;
function draw() {
  //background(255,255,255);  
if(txtInput===""){
alert("Enter Numbers")
}
else{
  if(isNaN(txtInput.value)){
    alert("Enter Numbers Only")
    txtInput.value=null
  }
  else{
    for(var i=0;i<txtInput.value; i++){
      card=new BingoCard()
      card.generateMatrix()
      divBingoCard.innerHTML+=card.drawCard()
    }
  }
}


}