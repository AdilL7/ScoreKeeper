console.log("Connected!");

var p1Val = document.querySelector('#p1Val');
var p2Val = document.querySelector('#p2Val');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var scoreLim = 5;

var p1b = document.querySelector('#p1b');
var p2b = document.querySelector('#p2b');
var rs = document.querySelector('#rs');
var inp = document.querySelector('#inp');

inp.addEventListener("click", function () {
    scoreLim = (parseInt(inp.value));
    document.querySelector('#htmlSc').innerHTML = scoreLim;
});

p1b.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === scoreLim) {
            gameOver = true;
            document.querySelector('#finalMsg').innerHTML = "Player One wins!";
            inp.disabled = true;
        }
        p1Val.innerHTML = p1Score;
    }
});

p2b.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === scoreLim) {
            gameOver = true;
            document.querySelector('#finalMsg').innerHTML = "Player Two wins!";
            inp.disabled = true;
        }
        p2Val.innerHTML = p2Score;
    }
});

rs.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    p1Val.innerHTML = p1Score;
    p2Val.innerHTML = p2Score;
    gameOver = false;
    document.querySelector('#finalMsg').innerHTML = "Playing to <span id=\"htmlSc\">" + scoreLim + "</span>";
    inp.disabled = false;
});