var read = require('readline-sync');
var bestScore = 0;

function gameTitle(){
  //open title V 
  console.clear();
  console.log('RUN DINOS\n=======\nBEST SCORE:'+ bestScore);
  console.log('\n\'S\'tart the game\n\'E\'nd game\n=======\n');
  //menu select V
  var answer=read.prompt('S or E:');
  if (answer=='s'||answer=='S'){return game();}
  if (answer=='e'||answer=='E'){return 0;}
  gameTitle();
}

function game(){
  //game screen
  console.clear();
  console.log('..\n..\n');
  //game over scoring
  bestScore=100;
  var answer=read.prompt('');
  if (answer!== false){return gameOver()};
  game();
}

function gameOver(){
  //gameover title V
  console.clear();
  console.log('game over!\nyour score is:'+bestScore);
  console.log('\n\'R\'etry or \'Q\'uit?');
  //retry or quit V
  var answer=read.prompt('R or Q');
  if (answer=='r'||answer=='R'){return game();}
  if (answer=='q'||answer=='Q'){return gameTitle();}
  gameOver();
}	

// now, play the game!
gameTitle();
