let score = JSON.parse(localStorage.getItem('score'))|| {
 
  wins:0,
  losses:0,
  tie:0

};

updateScoreElement()
/*
if(score === null){  // if(!score)
score = {
  wins:0,
  losses:0,
  tie:0
};
}
*/
//console.log());

let isAutoPlaying = false;
let intervalId


// const autoPlay =() =>
// {
  
// }
function autoPlay(){
if(!isAutoPlaying){
  intervalId = setInterval(() => {  // intervalId = setInterval(function(){  before arrow function.
    const playerMove = pickComputerMove()
  playGame(playerMove)
   },1000) 
   isAutoPlaying = true

}
else{
  clearInterval(intervalId)
  isAutoPlaying= false;
  }
  
} 

// document.querySelector('.js-rock-button').addEventListener('click', playGame('rock')) result as undefined because playgame do not run as function.


document.querySelector('.js-rock-button').addEventListener('click' , ()=>{
  playGame('rock')
})
document.querySelector('.js-paper-button').addEventListener('click' , ()=>{
  playGame('paper')
})
document.querySelector('.js-scissors-button').addEventListener('click' , ()=>{
  playGame('scissors')
})



document.body.addEventListener('keydown' , (event) => {    // event object contains the object what we pressed on the keyboard
//  console.log('keydown');
// console.log(event.key)   // what key we pressed

if(event.key === 'r'){
  playGame('rock');
} else if (event.key === 'p'){
  playGame('paper');
} else if (event.key === 's'){
  playGame('scissors');
}
}); 


document.querySelector('.js-stop-button').addEventListener('click', () => {
  if (isAutoPlaying) {
    autoPlay(); 
  }
});

function stopGame() {
  clearInterval(intervalId);
  isAutoPlaying = false;
}
document.querySelector('.js-stop-button').addEventListener('click', stopGame);



function playGame(playerMove){
const computerMove = pickComputerMove()

let result='';

if(playerMove === 'scissors'){
if(computerMove==='rock'){
result ='you lose'
}

else if(computerMove==='paper'){
result ='you win'
}

else if (computerMove ==='scissors'){
result ='tie'
}
}
else if(playerMove === 'paper')
{
if(computerMove==='rock'){
      result ='you win'
    }

    else if(computerMove==='paper'){
      result ='tie'
    }

    else if (computerMove ==='scissors'){
      result ='you lose'
    }
} 
else if(playerMove === 'rock')
{
if(computerMove==='rock'){
      result ='you win'
    }

    else if(computerMove==='paper'){
      result ='tie'
    }

    else if (computerMove ==='scissors'){
      result ='you lose'
    }
} 


if(result === 'you win'){
score.wins +=1;
}
else if(result === 'you lose'){
score.losses +=1;
}
else if(result === 'tie'){
score.tie +=1;
}


localStorage.setItem('score' , JSON.stringify(score));
updateScoreElement()

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = ` you
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
computer `


}


function updateScoreElement(){
document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses:${score.losses}, Tie: ${score.tie} `

}



function pickComputerMove(){

const randomNumber = Math.random();
let computerMove = '';

      if(randomNumber >=0 && randomNumber <1/3)
    {
      computerMove='rock';
    }

    if(randomNumber >=1/3 && randomNumber <2/3)
    {
      computerMove='paper';
    }

    if(randomNumber >=2/3 && randomNumber <1)
    {
      computerMove='scissors';
    }
return computerMove
}




