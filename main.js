'use strict'


function playGame(){

// Game logic - Variables for the game logic
let log = console.log;
let playerScore = 0;
let computerScore = 0;

	function getHumanChoice(choice){
		const regexRock = /rock/i;
		const regexScissors = /scissors/i;
		const regexPaper = /paper/i;
		choice = prompt('type the human choice:');

		if(regexRock.test(choice) === true) {
			return choice.match(regexRock)[0]
		} else if (regexScissors.test(choice) === true) {
			return choice.match(regexScissors)[0]
		} else if(regexPaper.test(choice) === true){
			return choice. match(regexPaper)[0]
		} else {
			return alert(`type either 'paper', 'scissors' or 'rock'. This round was invalidated.`)
		}
	};

	function getComputerChoice(){
		let rng = Math.trunc(Math.random() * 3);
		rng = Math.trunc(Math.random() * 3);
		const handSigns = ['paper', 'scissors', 'rock'];
		return handSigns[rng];
	}

	function playRound(humanChoice, computerChoice){
		humanChoice = getHumanChoice();
		computerChoice = getComputerChoice();

		switch(humanChoice){
			case 'paper':
				if(humanChoice === computerChoice){
					console.log('paper vs paper, it\'s a draw!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'rock'){
					playerScore++;
					console.log('paper vs rock, you win!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'scissors'){
					computerScore++;
					console.log(`paper vs scissors, you lose!`)
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				}
			case 'scissors':
				if(humanChoice === computerChoice){
					console.log('scissors vs scissors, it\'s a draw!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'rock'){
					computerScore++;
					console.log('scissors vs rock, you lose!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'paper'){
					playerScore++;
					console.log('scissors vs paper, you win!')
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				}
			case 'rock':
				if(humanChoice === computerChoice){
					console.log('rock vs rock, it\'s a draw!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'scissors'){
					playerScore++;
					console.log('rock vs scissors, you win!');
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				} else if(computerChoice === 'paper'){
					computerScore++;
					console.log('rock vs paper, you lose!')
					log(`player ${playerScore} - ${computerScore} computer`);
					break;
				}
		}
	};

	//looping gameplay
	
	for(let i = 0; i < 5; i++){
		playRound()
	};

	function showResult(){
		const winStyle = 'padding: 20px; background-color: #000; color: #fff; text-shadow: 0 0 10px #aaa; border: 2px solid green; border-radius: 10px';
		const lossStyle = 'padding: 20px; background-color: red; color: #fff; text-shadow: 0 0 10px rgba(255, 0, 0, 0.5); border: 2px solid darkred; border-radius: 10px';
		const drawStyle = 'padding: 20px; background-color: yellow; color: #000; text-shadow: 0 0 10px red; border: 2px solid #000; border-radius: 10px';


		if(playerScore > computerScore){
			return console.log(`%c YEAH BABY, you won! Maybe play again just to flex on the computer as the champ?`, winStyle)
		} else if (playerScore < computerScore){
			return console.log(`%c Yeah... you lost. Maybe okay it again and beat the computer this time?`, lossStyle)
		} else if(playerScore === computerScore){
			return console.log(`%c It was a... DRAW?! C'mon, you gotta settle this! Play it again!`, drawStyle)
		}
	};

return showResult()

}

playGame()
