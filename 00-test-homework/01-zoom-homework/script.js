const potatoPrice  = 15.678;
const carrotPrice = 123.965;
const tomatoPrice = 90.2345;

const maxPrice = Math.max(potatoPrice, carrotPrice, tomatoPrice);
const minPrice = Math.min(potatoPrice, carrotPrice, tomatoPrice);

const sumPrice = potatoPrice + carrotPrice + tomatoPrice;

const sumPriceInteger = Math.floor(potatoPrice) + Math.floor(carrotPrice) + Math.floor(tomatoPrice);

const sumPriseRounded = 100 * Math.round(sumPriceInteger / 100);
 
const isOddOrEven = sumPriseRounded % 2 === 0;

const totalAmountOfMoney = 500;

const rest = totalAmountOfMoney - sumPrice;

const average = +(sumPrice / 3).toFixed(2);

const someDiscount = Math.round(Math.random()*101) / 100;

const priceWithDiscount = +(sumPrice - (sumPrice * someDiscount)).toFixed(2);

const cost = sumPriceInteger / 2;

const profit = cost - (sumPrice * someDiscount);

console.log (`Maксимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumPrice}
Округлена вартість всіх товарів: ${sumPriceInteger}
Сума всіх товарів є парним числом: ${isOddOrEven}
Вартість товарів округлена до сотень: ${sumPriseRounded}
Решта з 500: ${rest}
Середня ціна: ${average}
Процентна знижка: ${someDiscount}
Собівартість:${cost}
Чистий прибуток: ${profit}`);



