let randInt = Math.floor(Math.random() * 3);

let result = '';

if (randInt === 0){
    result = 'Rock';
} else if (randInt === 1){
    result = 'Paper';
} else {
    result = 'Scissors';
}


let userPick = 'Test';
let response;

let paper = document.getElementById("paper");
paper.onclick = function() {
    userPick = 'Paper';
};

let rock = document.getElementById("rock");
rock.onclick = function() {
    userPick = 'Rock';
};

let scissors = document.getElementById("scissors");
scissors.onclick = function() {
    userPick = 'Scissors';
};




    let result1 = document.getElementById("result");
result1.onclick = function () {

    if ((userPick == 'Rock') && (result == 'Paper')){
        response = "You lose, paper beats rock!";

    } else if ((userPick == 'Rock') && (result == 'Scissors')){
        response = "You win, rock beats scissors!";

    } else if ((userPick == 'Paper') && (result == 'Scissors')){
        response = "You lose, scissors beats paper";

    } else if ((userPick == 'Paper') && (result == 'Rock')){
        response = "You win, paper beats rock";

    } else if ((userPick == 'Scissors') && (result == 'Rock')){
        response = "You lose, rock beats scissors";

    } else if ((userPick == 'Scissors') && (result == 'Paper')){
        response = "You win, scissors beats paper";
    } else {
        response = "You and the computer picked the same one!";
    }

        result1.innerHTML = response;
    };


