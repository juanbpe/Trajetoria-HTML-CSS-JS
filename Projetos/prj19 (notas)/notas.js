function calcular(){
  let n1 = Number(document.getElementById('nota1').value);
  let n2 = Number(document.getElementById('nota2').value);
  let naf = Number(document.getElementById('notaavaliacao').value);

  let media = ((n1 * 2) + (n2 * 3)) / 5;
  let maiorMedia = media;
  let situacao = 'Reprovado!';

  if (naf > 0 && media >= 20 && media < 60){
    let media2 = (media + naf) / 2;
    let media3 = ((2 * naf) + (3 * n2)) / 5;
    let media4 = ((2 * n1) + (3 * naf)) / 5;

    maiorMedia = Math.max(media, media2, media3, media4);
  }

  if (maiorMedia >= 60){
    situacao = 'Aprovado!';
  }else if (maiorMedia < 20){
    situacao = 'Reprovado direto!';
  }else{
    situacao = 'Em recuperação!';
  }

  document.getElementById('mf').value = maiorMedia;
  document.getElementById('situacao').value = situacao;
}

function quantoFalta(){
  let n1 = Number(document.getElementById('nota1').value);
  let n2 = Number(document.getElementById('nota2').value);

  let notaNecessaria = ((60 * 5) - (n1 * 2) - (n2 * 3)) / 3;

  if (notaNecessaria <= 0){
    alert("O aluno já está aprovado!");
  }else if (notaNecessaria > 100){
    alert("Mesmo com nota máxima, o aluno não alcançaria 60.");
  }else{
    alert(`O aluno precisa tirar pelo menos ${notaNecessaria} ponto(s) para alcançar a média.`);
  }
}