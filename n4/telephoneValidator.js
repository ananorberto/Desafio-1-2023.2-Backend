function telephoneCheck(str) {

    const validStr = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 

    return validStr.test(str);
  }
  

telephoneCheck("555-555-5555"); 