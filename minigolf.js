
let player = '';
let gameNum = 0;
let par = 3;
let score = 0;

player = prompt('Welcome to GC mini-golf! What is your name?', player);
gameNum = prompt(`Hi, ${player}! Would you like to play 3 or 6 holes?`, gameNum);
par = par * gameNum;

for (let index = 0; index < gameNum; index++) {
    let putts = 0;   
    putts = prompt(`How many putts for hole ${index + 1}? (par: 3)`, putts);
    score += Number(putts);
    console.log('putts', putts)
    console.log('score', score)
}

if (score === par) {
    console.log(`Good game, ${player}. Your total par was: 0.`)
} else if (score < par) {
    console.log(`Great job, ${player}! Your total par was: -${par - score}`)
} else {
    console.log(`Nice try, ${player}! Your total par was: +${score - par}`)
}

