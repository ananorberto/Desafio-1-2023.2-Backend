function palindrome(str) {
    // replace() method returns a new string with one
    // /[nao alfanumericos]/ flag 'g' = global (todas as ocorrencias)
    str = str.replace(/[\W_]/g, '').toUpperCase();

    // .split separa os caracteres, .reverse inverte, .join transforma em string dnv
    return str === str.split('').reverse().join('');
    // "EYE" === "EYE" -> true
}
  
palindrome("eye");