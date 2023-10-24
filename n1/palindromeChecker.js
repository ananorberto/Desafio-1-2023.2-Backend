function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toUpperCase();
    return str === str.split('').reverse().join('');
}

palindrome("eye");
