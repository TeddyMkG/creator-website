let scoreBoard = JSON.parse( localStorage.getItem('score'))
      ||{
          Wins: 0,
          Losses: 0,
          Draws: 0
        };
        scoreUpdates();
      function gameResult(playerMove)
      
      {const computerMove = pickcomputerMove();
        let result = ''

          if (playerMove === 'rock'){
        if (computerMove==='rock'){result='tie'}else if(computerMove==='paper'){result= 'you lose'}else if(computerMove==='scissors'){result='you win'}
        }
        else if(playerMove === 'paper'){
        if (computerMove==='rock'){result='you win'}else if(computerMove==='paper'){result= 'tie'}else if(computerMove==='scissors'){result='you lose'}}

        else if(playerMove === 'scissors'){
        if (computerMove==='rock'){result='you lose'}else if(computerMove==='paper'){result= 'you win'}else if(computerMove==='scissors'){result='tie'}
        }
        
        


        
        if (result==='you win'){scoreBoard.Wins = scoreBoard.Wins + 1}else if (result==='you lose'){scoreBoard.Losses = scoreBoard.Losses + 1 }else if (result==='tie') {scoreBoard.Draws = scoreBoard.Draws + 1}

        document.querySelector('.div-1').innerHTML = result;
       
        
        document.querySelector('.div-2').innerHTML = `you chose <img src="images/${playerMove}-emoji.png">.The computer chose <img src="images/${computerMove}-emoji.png">.`;
        scoreUpdates();
       
        
        localStorage.setItem('score',JSON.stringify(scoreBoard))
        

       
       /* alert(`You chose ${playerMove}. The computer chose ${computerMove} ${result}\nWINS:${scoreBoard.Wins} LOSSES: ${scoreBoard.Losses} DRAWS: ${scoreBoard.Draws}`)*/
      }

       function scoreUpdates (){
        document.querySelector('.div-3').innerHTML = `WINS:${scoreBoard.Wins} LOSSES: ${scoreBoard.Losses} DRAWS: ${scoreBoard.Draws}`;
       };

      
      
          function pickcomputerMove (){
            const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber>=0&&randomNumber<1/3){
          computerMove = 'rock'}
        else if (randomNumber>=1/3&&randomNumber<2/3){computerMove ='paper'}
        else if(randomNumber>=2/3&&randomNumber<1){computerMove = 'scissors'}
        return computerMove;

      }