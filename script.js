'use strict';
/*
console.log(document.querySelector('.message').textContent);  //reading the content of the element..
document.querySelector('.message').textContent = 'Correct Number!'; //changing the content..
console.log(document.querySelector('.message').textContent);  // and again reading the content after changing, so this is DOM manupulation.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);                   
*/

let score = 20;  //state of our application
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = (Number(document.querySelector('.guess').value));
        console.log(guess, typeof guess);
        //this function is only be called as soon as th event happen by the Js Engine..
        // we didn't call this function, we only just define the function, then pass it into a Event Handler. 
        if (!guess) { // !guess=true 
            displayMessage = 'No Input!!';

            //When player wins!!
  
        } else if (secretNumber === guess) {
            displayMessage ('🎊 Correct!! Number matched..');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';//for using CSS (.style.(css properties)) is mandatory..= '' <- value shoul be inside the string..  
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

          //When guess is Wrong
            
        } else if (guess != secretNumber) {
            if (score > 1) {
                displayMessage (guess > secretNumber ? "Too high!" :"Too low!" );
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage("You Lost the Game");
                document.querySelector('.score').textContent = 0;
            }
        
        }
    

            

//When guess is too high
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = "Too high!";
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = "You Lost the Game";
//         document.querySelector('.score').textContent = 0;
//     }

// //When guess is too low
// }else if(guess < secretNumber){
//     if (score > 1) {
//         document.querySelector('.message').textContent = "Too low!";
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = "You Lost the Game!!";
//         document.querySelector('.score').textContent = 0;
//     }
// } 
});

// For again button

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayMessage('Start guessing...');
        document.querySelector('.score').textContent= score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';  
        document.querySelector('.number').style.width = '15rem';  
    }
    );


