function rot13(str) {
    let decodedString = '';
    
    for(let i = 0; i < str.length; i++){
        var char = str.charCodeAt(i);

        if (char >= 65 && char<= 90){
            char = (char - 65 + 13) % 26 + 65;
            decodedString += String.fromCharCode(char);
        }
        else{
            decodedString += String.fromCharCode(char);
        }

    }

    return decodedString;
  }
  
  rot13("SERR PBQR PNZC");

  