let count = 0;


const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
  count++;
  CURRENT_NUMBER.innerHTML = count;
}

function decrement(){
 count--;
 CURRENT_NUMBER.innerHTML = count;
}




/* tente implementar addEventListener
condicionais para desabilitar incremento ou decremento quando COUNT for um valor diferente
mudar a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. */