console.log("Test homework");
console.log("I change my homework");
// 4 творіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
const getMySalary = function (country) {

    const getRandomSalary = (minSalary = 1500, maxSalary = 2000) => Math.floor(minSalary + Math.random()
        * (maxSalary + 1 - minSalary));
    const taxes =  +(getRandomSalary() * this.tax).toFixed(2);

    const profit = +(getRandomSalary() - taxes).toFixed(2);

        return Object.assign({ salary: getRandomSalary(), taxes, profit })
};

console.log("Функція #1");
console.log(getMyTaxes.call(ukraine, 1000));
console.log("Функція #2");
console.log(getMiddleTaxes.call(ukraine));
console.log("Функція #3");
console.log(getTotalTaxes.call(ukraine));
console.log("Функція #4");
const result = setInterval(() => console.log( getMySalary.call(ukraine)), 10000 );
setTimeout(() => { clearInterval(result) }, 100000);