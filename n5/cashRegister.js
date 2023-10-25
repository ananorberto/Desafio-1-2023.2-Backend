function checkCashRegister(price, cash, cid) {
  const CASHVALUES = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let totalPrice = cid.reduce((total, coin) => total + coin[1], 0).toFixed(2);

  let moneyRet = cash - price;
  if (Number(totalPrice) < moneyRet) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (Number(totalPrice) === moneyRet) {
    return { status: "CLOSED", change: cid };
  }

  const changeRet = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const [cName, cAvailable] = cid[i];
    const coinValue = CASHVALUES[cName];
    let coinCount = Math.floor(cAvailable / coinValue);

    let retCoin = 0;
    while (moneyRet >= coinValue && retCoin < coinCount) {
      moneyRet = (moneyRet - coinValue).toFixed(2);
      retCoin++;
    }

    if (retCoin > 0) {
      changeRet.push([cName, retCoin * coinValue]);
    }
  }
  if (Number(moneyRet) > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: changeRet };
}
