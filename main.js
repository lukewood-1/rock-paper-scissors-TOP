'use strict'

function playGame(){

// Game logic - Variables for the game logic
let log = console.log;
let playerScore = 0;
let computerScore = 0;
const uiMessage = document.querySelector('#message-center');
const uiScore = document.querySelector('#score');
const buttons = document.querySelectorAll('.choiceBtn'); // choice buttons
const newRoundBtn = document.querySelector('.newRoundBtn'); // Button


// that starts the game logic
newRoundBtn.addEventListener('click', playRound);

let playerDecision; // variable to store the player decision and compare to 
// the computer choice
		const getHumanChoice = (e)=>{
		playerDecision = e.target.getAttribute('data-value');
		uiMessage.textContent = `You chose ${playerDecision}`;
		return playerDecision
	};

// buttons to reflect human choice
	for(let item of buttons){ 
		item.addEventListener('click', getHumanChoice);
	};


	function getComputerChoice(){
		let rng = Math.trunc(Math.random() * 3);
		rng = Math.trunc(Math.random() * 3);
		const handSigns = ['paper', 'scissors', 'rock'];
		return handSigns[rng];
	};

// reset new game buttons to start a new FT5
	function resetGame(){
		newRoundBtn.removeEventListener('click', playRound);
		for(let i = 0; i < buttons.length; i++){
			buttons[i].style.display = 'none';
		};
		newRoundBtn.textContent = 'new game';
		newRoundBtn.addEventListener('click', ()=>{
			playerScore = 0;
			computerScore = 0;
			uiScore.textContent = 'FT5';
			newRoundBtn.textContent = 'new round';
			for(let i = 0; i < buttons.length; i++){
				buttons[i].style.display = 'inline';
			};
			uiMessage.textContent = "Alright, one more!";
			newRoundBtn.addEventListener('click',	playRound);
		}, {
			once: true,
		});
	}

// current logic for this: FT5 (first to 5)
	function showFinalResult(){
		const winStyle = 'padding: 20px; background-color: #000; color: #fff; text-shadow: 0 0 10px #aaa; border: 2px solid green; border-radius: 10px';
		const lossStyle = 'padding: 20px; background-color: red; color: #fff; text-shadow: 0 0 10px rgba(255, 0, 0, 0.5); border: 2px solid darkred; border-radius: 10px';
		const drawStyle = 'padding: 20px; background-color: yellow; color: #000; text-shadow: 0 0 10px red; border: 2px solid #000; border-radius: 10px';


		if(playerScore >= 5){
			uiMessage.textContent = `YEAH BABY, you won! Maybe play again just to flex on the computer as the champ?`;
			resetGame();
		} else if (computerScore >= 5){
			uiMessage.textContent = `Yeah... you lost. Maybe play it again and beat the computer this time?`;
			resetGame();
		}
	};

// Show feedback text between rounds
	const uiFeedback = (msg, timeout, returnMsg = 'alright! next game!')=>{
			uiMessage.textContent = msg;
			const count =	setTimeout(() => uiMessage.textContent = returnMsg, timeout)
			clearTimeout(count);
			count;
	};

// Run human choice vs computer choice
	function playRound(humanChoice, computerChoice){
		computerChoice = getComputerChoice();
		humanChoice = playerDecision;

// Show scores on the screen
	function updateScore(){
		uiScore.textContent = `player ${playerScore} - ${computerScore} computer`;
	};

// Game logic - if playerDecision beats computerChoice, player gets 1 point
		switch(humanChoice){
			case 'paper':
				if(humanChoice === computerChoice){
					uiFeedback('paper vs paper, it\'s a draw!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'rock'){
					playerScore++;
					uiFeedback('paper vs rock, you win!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'scissors'){
					computerScore++;
					uiFeedback('paper vs scissors, you lose!', 7000);
					updateScore();
					break;
				}
			case 'scissors':
				if(humanChoice === computerChoice){
					uiFeedback('scissors vs scissors, it\'s a draw!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'rock'){
					computerScore++;
					uiFeedback('scissors vs rock, you lose!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'paper'){
					playerScore++;
					uiFeedback('scissors vs paper, you win!', 7000);
					updateScore();
					break;
				}
			case 'rock':
				if(humanChoice === computerChoice){
					uiFeedback('rock vs rock, it\'s a draw!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'scissors'){
					playerScore++;
					uiFeedback('rock vs scissors, you win!', 7000);
					updateScore();
					break;
				} else if(computerChoice === 'paper'){
					computerScore++;
					uiFeedback('rock vs paper, you lose!', 7000);
					updateScore();
					break;
				}
		};
		playerDecision = null;
		showFinalResult();
	};


  
};

playGame()


