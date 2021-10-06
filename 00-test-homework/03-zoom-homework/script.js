//1 
const getMaxNumber = (number) => {

    const stringNumber = number.toString();

    let maxNumber = 0;

    for (let i = 0; i < stringNumber.length; i++) {

        if (stringNumber[i] > maxNumber) {

            maxNumber = stringNumber[i];
        };
    };

    return maxNumber;

};
//2. Ступінь числа

const getPow = (number, pow) => {
    let result = 1;

    for (let i = 0; i < pow; i++) {
        result *= number;
    }
    return result;
};


const getPow2 = (number2, pow2) => {
    if (number2 === 1) {
        return pow2;
    } else {
        return pow2 * getPow2(number2, pow2 - 1);
    }
}

//3. Форматування імені

const formatName = (name = 'невідомо') => (name[0]).toUpperCase() + name.toLowerCase().slice(1);

//4. Вирахування залишку 

const remainder = (salary, tax1, tax2) => {
    const tax1Given = (parseFloat(tax1)) * 0.01;
    const tax2Given = (parseFloat(tax2)) * 0.01;
    return salary - salary * (tax1Given + tax2Given);
}

//5. Рандомне ціле число від N до M 

const getrandomInteger = (firstNumber, secondNumber) => Math.floor(firstNumber + Math.random() * (secondNumber + 1 - firstNumber));


//6. Підрахунок однакової букви в слові 

const countLetter = (letter, word) => {
    const stringletter = (letter.toString()).toLowerCase();

    const stringWord = (word.toString()).toLowerCase();

    let sum = 0

    for (let char of stringWord) {
        if (char === stringletter)
            sum++;
    };

    return sum;

};

const countLetter2 = (letter, word) => {
    const stringletter = (letter.toString()).toLowerCase();

    const stringWord = (word.toString()).toLowerCase();

    let sum = 0

    for (let i = 0; i < stringWord.length; i++) {
        if (stringWord[i] === stringletter) {
            sum++;
        };
    };

    return sum;
};

//7. Конвертування валюти

const convertCurrency = (currency) => {
    const coefficient = 25;
    if (currency.includes("$")) {
        const grivna = parseInt(currency) * coefficient;
        return `${grivna}грн`;

    } else if (currency.includes("UAH")) {
        const dollar = parseInt(currency) / coefficient;
        return `${dollar}$`;

    } else {
        return `Невідома валюта`;
    };

};

//8. Отримання випадкового паролю

const getRandomPassword = (passwordLength = 8) => Math.round(Math.random() * Math.pow(10, passwordLength));;

//9. Видалення букв

const deleteLetters = (letter, word) => {
    const stringletter = letter.toString();

    const stringWord = (word.toString());

    let newWord = "";

    for (let i = 0; i < stringWord.length; i++) {
        if (stringWord[i] !== stringletter) {
            newWord += stringWord[i];
        };
    };

    return newWord;
};

//10. Чи є слово паліндромом ?

const isPalyndrom = (word) => {
    const stringWord = (word.toString());

    let revers = "";

    for (let i = stringWord.length - 1; i >= 0; i--) {
        revers += stringWord[i];

    };

    return stringWord === revers;

};


const deleteDuplicateLetter = (word) => {
    const stringWord = word.replaceAll(' ','').toLowerCase();

    let newWord = "";

    for (let i = 0; i < stringWord.length; i++) {
        
        if(stringWord.indexOf(stringWord[i]) === stringWord.lastIndexOf(stringWord[i])){
            
            newWord += stringWord[i];
        }

    };

    return newWord

};


console.log(`Функція №1: ${getMaxNumber(158)}`);
console.log(`Функція №2(1): ${getPow(2, 6)}`);
console.log(`Функція №2(2): ${getPow(2, 6)}`);
console.log(`Функція №3: ${formatName('вЛАД')}`);
console.log(`Функція №4: ${remainder(1000, "12.5%", "5.6%")}`);
console.log(`Функція №5: ${getrandomInteger(1, 10)}`);
console.log(`Функція №6(1): ${countLetter('а', 'Асталавіста')}`);
console.log(`Функція №6(2): ${countLetter2('о', 'Парадокс')}`);
console.log(`Функція №7:${convertCurrency("100$")}`);
console.log(`Функція №8:${getRandomPassword()}`);
console.log(`Функція №9:${deleteLetters("a", "blablabla")}`);
console.log(`Функція №10:${isPalyndrom("мадам")}`);
console.log(`Функція №11:${deleteDuplicateLetter("мадам")}`);







