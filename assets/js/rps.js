let rps_div = document.getElementById("rps");
let rps_title = document.getElementById("rps-title");
let rps_desc = document.getElementById("rps-desc");

let secret_msgs_h1 = document.getElementById("secret-msgs");

let clicks = 0;
let rps_unlocked = false;
let beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

function secret_rps() {
    clicks++;
    if (clicks == 1) {secret_msgs_h1.innerHTML = "wait..."}
    if (clicks == 2) {secret_msgs_h1.innerHTML = "stop it!"}
    if (clicks == 4) {secret_msgs_h1.innerHTML = "you're not supposed to click that!"}
    if (clicks == 5) {
        secret_msgs_h1.innerHTML = "";
        rps_unlocked = true;
        rps_div.style.display = "block";
    }
}

function rps_play(choice) {
    let computer = Math.floor(Math.random() * 3);
    let computer_choice = ["rock", "paper", "scissors"][computer];
    let result = "";
    let desc_result = "";

    if (rps_unlocked) {
        if (choice == computer_choice) {
            result = "It was a tie!";
            desc_result = "You both chose " + choice + ".";
        } else if (beats[choice] == computer_choice) {
            result = "You won!";
            desc_result = `${choice} beats ${computer_choice}.`;
        } else {
            result = "You lost.";
            desc_result = `${computer_choice} beats ${choice}.`;
        }

        rps_title.innerHTML = `${result}`;
        rps_desc.innerHTML = `${desc_result}`;
    }
}