function compareTrue(valor1, valor2) {
    if(valor1 ===true && valor2 ===true){
    return true;
  }else{
    return false;
  }
}

  // Exemplos de uso:
  console.log(compareTrue(true, true));
  console.log(compareTrue(true, false));
  console.log(compareTrue(false, true));
  console.log(compareTrue(false, false));

  function calcArea(base, heigth){
    return base * heigth / 2;
  }
  console.log(calcArea(10, 50));
  console.log(calcArea(5, 2));
  console.log(calcArea(51,1));

  function splitSentence(sentence) {
    const words = [];
    let word = '';

    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];

      // Se o caractere não for um espaço em branco, adiciona-o à palavra atual.
      if (char !== ' ') {
        word += char;
      } else {
        // Se encontrarmos um espaço em branco, adicionamos a palavra atual ao array de palavras.
        if (word !== '') {
          words.push(word);
          word = '';
        }
      }
    }
    if (word !== '') {
        words.push(word);
      }

    return words;
  }

  // Exemplo de uso:
  console.log(splitSentence("Drummond Advisors"));
  console.log(splitSentence("Drummond Advisors Tech"));
  console.log(splitSentence("Foguete"));

  function concatName(arr) {

    const primeiroItem = arr[0];
    const ultimoItem = arr[arr.length - 1];

    return ultimoItem + ', ' + primeiroItem;
  }

  // Exemplo de uso:
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
  console.log(concatName(['foguete', 'não', 'tem', 'ré']));
  console.log(concatName(['captain', 'my', 'captain']));