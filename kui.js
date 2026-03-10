let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let targetArea = document.querySelector(".target");
const audio = new Audio('pn.mp3');
let n = 0;
let x = 0;
let y = 0;
let time = 60;
let score = 0;
let zi = 0;
let r = 0;
let rr = 0;
let i = 0;
let ti = 0;
let starrt = 1;
let haba = 0;

function startk(){
    starrt = 2;
    score = 0;
    zi = 0;
    r = 0;
    rr = 0;
    i = 0;
    ti = 0;
    n = 1000;
    haba = 150;

    r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

function starth(){
    starrt = 2;
    score = 0;
    zi = 0;
    r = 0;
    rr = 0;
    i = 0;
    ti = 0;
    time = 60;
    n = 500;
    haba = 150;
    
    r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

function startm(){
    starrt = 2;
    score = 0;
    time = 60;
    r = 0;
    rr = 0;
    i = 0;
    ti = 0;
    n = 250;
    haba = 100;

    r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

function starttm(){
    starrt = 2;
    score = 0;
    time = 60;
    r = 0;
    rr = 0;
    i = 0;
    ti = 0;
    n = 100;
    haba = 50;

    r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}


function startttm(){
    starrt = 2;
    score = 0;
    time = 60;
    r = 0;
    rr = 0;
    i = 0;
    ti = 0;
    n = 1;
    haba = 25;

    r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

setInterval(() => {
    if(starrt == 2){
        ti++;
        if (ti > n - 1){
            ti = 0;
            r = Math.floor(Math.random() * (700 - haba));
            rr = Math.floor(Math.random() * (400 - haba));
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.rect(r, rr, haba, haba);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

        document.getElementById("score").innerHTML = score;
    }
}
}, 10);


setInterval(() => {
    if(starrt == 2){
        time = time - 1;
        if (time < 0) {
            time = 60;
            alert("おしまいでーす！あなたのてんすうは"+score+"てんです");
            starrt = 1;
        }
        document.getElementById("time").innerHTML = time;
    }
}, 1000);

window.addEventListener("load", function () {
    window.onmousemove = function (e) {
        x = e.pageX;
        y = e.pageY;
    };
});
  
targetArea.addEventListener("mousedown", () => {
    if (x > r & x < r + haba & y > rr & y < rr + haba ){
        audio.playbackRate = 15;
        audio.play();
        score++;
        document.getElementById("score").innerHTML = score;
        ti = 0;
        r = Math.floor(Math.random() * (700 - haba));
    rr = Math.floor(Math.random() * (400 - haba));
        
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(r, rr, haba, haba);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}
});