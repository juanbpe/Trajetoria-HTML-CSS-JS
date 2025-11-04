let s1 = "Proerd é o programa";
let s2 = "'proerd... É A SOLUÇÃÃÃÃÃO'";
let s3 = "lutandoo, contra as drooogaaaaas";

// console.log(s1, s2, s3);

function somar(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let res = parseInt(n1) + Number(n2);

    document.getElementById('resultado').innerHTML = 'O valor da soma é: <b>' + res + '</b>';

    // alert('O valor da soma é: ' + res);
}

function subtrair(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let res = parseInt(n1) - Number(n2);

    document.getElementById('resultado').innerHTML = 'O valor da subtração é: <b>' + res + '</b>';

    // alert('O valor da subtração é: ' + res);
}

function multiplicar(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let res = parseInt(n1) * Number(n2);

    document.getElementById('resultado').innerHTML = 'O valor da multiplicação é: <b>' + res + '</b>';

    // alert('O valor da multiplicação é: ' + res);
}

function dividir(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let res = parseInt(n1) / Number(n2);

    document.getElementById('resultado').innerHTML = 'O valor da divisão é: <b>' + res + '</b>';

    // alert('O valor da divisão é: ' + res);
}