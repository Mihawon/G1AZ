import readlineSync from 'readline-sync'
var read = readlineSync;
var bestScore = 0;

function gameTitle(){
  //open title V 
  console.clear();
  console.log('RUN DINOS\n=======\nBEST SCORE:'
    + bestScore +
    '\n\'S\'tart the game\n\'E\'nd game\n=======\n'
  );
  //menu select V
  var answer=read.prompt('S or E:');
  if (answer=='s'||answer=='S'){return game();}
  if (answer=='e'||answer=='E'){return 0;}
  gameTitle();
}

function game(){
  const gameWidth = 100;
  const gameHeight = 30; 
  console.clear();
  bestScore=100;
  return gameOver();
}

function gameOver(){
  console.clear();
  //retry or quit V
  console.log('game over!\nyour score is:'
    + bestScore +
    '\n\'R\'etry or \'Q\'uit?');
  var answer=read.prompt('R or Q');
  if (answer=='r'||answer=='R'){return game();}
  if (answer=='q'||answer=='Q'){return gameTitle();}
  gameOver();
}	

// now, play the game!
gameTitle();
