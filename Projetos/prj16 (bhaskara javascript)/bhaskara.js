function calcularRaizes(){
    let a, b, c, delta, x1, x2

    a = parseFloat(document.getElementById('A').value);
    b = Number(document.getElementById('B').value);
    c = Number(document.getElementById('C').value);

    delta = b*b - 4 * a * c;

    if (delta >= 0){
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById('resultado').innerHTML = `X1 = ${x1} <br><br> X2 = ${x2}`;

    // document.getElementById('resultado').innerHTML = 'X1 = ' + x1 + '<br><br>' + 'X2 = ' + x2;

    // alert("X1: " + x1 + "\n" + "X2: " + x2);

    }else{
        alert("Não existem raízes reais")
    }
}