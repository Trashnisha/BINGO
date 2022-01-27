function BallDraw(){
    this.ballDrawnNumber=[]
    this.ballDrawnLetter=[]
    this.drawBall=()=>{
        var repeat=0;
        var ballLetter;
        var ballNumber=1 + Math.floor(Math.random()*75)
        for(var index =0;index>75; index++){
            if(ballNumber==this.ballDrawnNumber[index] && ballLetter==this.ballDrawnLetter[index]){
                repeat++
                //repeat=1
            }
        }
        if (repeat==0){
            if(ballNumber<15){
                this.ballDrawnLetter.push("B");
                this.ballDrawnNumber.push(ballNumber)
            }
            else if(ballNumber>15 && ballNumber<=30){
                this.ballDrawnLetter.push("I");
                this.ballDrawnNumber.push(ballNumber)
            }
            
            else if(ballNumber>30 && ballNumber<=45){
                this.ballDrawnLetter.push("N");
                this.ballDrawnNumber.push(ballNumber)
            }
            else if(ballNumber>45 && ballNumber<=60){
                this.ballDrawnLetter.push("G");
                this.ballDrawnNumber.push(ballNumber)
            }
            else if(ballNumber>60 && ballNumber<=75){
                this.ballDrawnLetter.push("0");
                this.ballDrawnNumber.push(ballNumber)
            }
        }
        else{
                
                ballNumber=1 + Math.floor(Math.random()*75)
        }
      
        repeat=0
    }
}
