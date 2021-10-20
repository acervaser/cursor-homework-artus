const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

const getMyTaxes = function (salary) {
    return this.tax * salary;
};

//2 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

const getMiddleTaxes = function (country) {
    return this.tax * this.middleSalary;
};

// 3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

const getTotalTaxes = function (country) {
    return this.tax * this.middleSalary * this.vacancies;
};

// 4 творіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
const getMySalary = function (country) {
    setInterval(() => {

        const getRandomSalary = (minSalary = 1500, maxSalary = 2000) => Math.floor(minSalary + Math.random()
            * (maxSalary + 1 - minSalary));

        const taxes = +(getRandomSalary() * this.tax).toFixed(2);

        const profit = +(getRandomSalary() - taxes).toFixed(2);
        console.log(Object.assign({ salary: getRandomSalary(), taxes, profit }))
    }, 10000)

    return "будь ласка зачекайте"

};

console.log("Функція #1");
console.log(`Сума податків в Україні ${getMyTaxes.call(ukraine, 1000)}`);
console.log("Функція #2");
console.log(`Середня сума податків в Україні ${getMiddleTaxes.call(ukraine)}`);
console.log("Функція #3");
console.log(`Загальна сума податків в Україні ${getTotalTaxes.call(ukraine)}`);
console.log("Функція #4");
console.log(`Розраховуєм вашу можливу зарплату після закінчення Сursor education, ${getMySalary.call(ukraine)} :)`)

