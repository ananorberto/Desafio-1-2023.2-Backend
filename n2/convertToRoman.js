function convertToRoman(num) {
    const arr = {
        M : 1000,
        CM: 900,
        D : 500,
        CD: 400,
        C : 100,
        XC: 90,
        L : 50,
        XL: 40,
        X : 10,
        IX: 9,
        V : 5,
        IV: 4,
        I : 1,
    };

    let result = '';

    for(const n in arr){
        while (num >= arr[n]){
            result += n;
            num -= arr[n];
        }
    }

    return result;
}

convertToRoman(36);
