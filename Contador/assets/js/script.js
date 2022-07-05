let count = 0;
var button = document.querySelector('button');

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
  if(count < 10){ 
    count++
    CURRENT_NUMBER.innerHTML = count; 
  }   
  else {
    disableAddButton();
  }
}

function decrement(){
  if (count > -10){
  count--;
  CURRENT_NUMBER.innerHTML = count;
  }
  else{
    disableSubtractButton();
  }
}

/* ENABLE AND DISABLE BUTTONS */ 

function disableAddButton() {
  button = document.getElementsByName('add')
  button.disabled = true;
}

function disableSubtractButton(){
  button = document.getElementsByName('subtract')
  button.disabled = true;
}

function paintRed(){
  if(count < 0){
    document.getElementById('currentNumber').style.color = "red";
  }
  else{
    document.getElementById('currentNumber').style.color = "white";
  }
}


/* tente implementar addEventListener
condicionais para desabilitar incremento ou decremento quando COUNT for um valor diferente
mudar a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. */