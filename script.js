const roll1= document.querySelector(".btn-r1");
const roll2= document.querySelector(".btn-r2");
const skip1= document.querySelector(".btn-s1");
const skip2= document.querySelector(".btn-s2");
let turn = 1;
let output1 = 0;
let output2 = 0;
const p1RollsLeft = document.querySelector(".p1-rolls-left");
const p2RollsLeft = document.querySelector(".p2-rolls-left");
const outcome = document.querySelector(".outcome");
let clicks1 = 3;
let clicks2 = 3;
let prev1 = document.querySelector(".dice1.p1");
let prev2 = document.querySelector(".dice1.p2");
let p1wins = 0;
let p2wins = 0;
const dicon = document.querySelector(".dicon")

setInterval( () => {
    dicon.style("transform: rotate(90deg)")
}, 2000)

