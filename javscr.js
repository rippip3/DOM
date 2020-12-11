function num(){
  let num1 = Math.random();
  num1 = Math.floor((num1*6)+1);
  let num2 = Math.random();
  num2 = Math.floor((num2*6)+1);

  if(num1 > num2){
    document.querySelector(".whowin").innerHTML = "Игрок №1 выиграл!!!";
  }
  else if(num1 < num2){
    document.querySelector(".whowin").innerHTML = "Игрок №2 выиграл!!!";
  }
  else{
    document.querySelector(".whowin").innerHTML = "Ничья!!!";
  }

  if(num1 === 1){
    document.querySelector(".player1").style.backgroundImage="url('ravno1.png')";
  }
  else if(num1 === 2){
    document.querySelector(".player1").style.backgroundImage="url('ravno2.png')";
  }
  else if(num1 === 3){
    document.querySelector(".player1").style.backgroundImage="url('ravno3.png')";
  }
  else if(num1 === 4){
    document.querySelector(".player1").style.backgroundImage="url('ravno4.png')";
  }
  else if(num1 === 5){
    document.querySelector(".player1").style.backgroundImage="url('ravno5.png')";
  }
  else{
    document.querySelector(".player1").style.backgroundImage="url('ravno6.png')";
  }

  if(num2 === 1){
    document.querySelector(".player2").style.backgroundImage="url('ravno1.png')";
  }
  else if(num2 === 2){
    document.querySelector(".player2").style.backgroundImage="url('ravno2.png')";
  }
  else if(num2 === 3){
    document.querySelector(".player2").style.backgroundImage="url('ravno3.png')";
  }
  else if(num2 === 4){
    document.querySelector(".player2").style.backgroundImage="url('ravno4.png')";
  }
  else if(num2 === 5){
    document.querySelector(".player2").style.backgroundImage="url('ravno5.png')";
  }
  else{
    document.querySelector(".player2").style.backgroundImage="url('ravno6.png')";
  }
}
