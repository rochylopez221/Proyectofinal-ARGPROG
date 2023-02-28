var boton = document.getElementById("button");
var number = document.getElementById('number');
var email = document.getElementById('email');

var contador = 0;

boton.onclick = function () {
    contador++;
    console.log(contador);
    if(number.classList.contains('hide')) {
        number.classList.remove('hide');
    } else {
        number.classList.add('hide');
    }
    if(email.classList.contains('hide')){
        email.classList.remove('hide');
    }else{
        email.classList.add('hide')
    }
    if(boton.innerHTML == 'View Contact') {
        boton.innerHTML = 'Hide Contact'
    } else {
        boton.innerHTML = 'View Contact'
    }
}