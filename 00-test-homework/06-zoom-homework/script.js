// 1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 

const getRandomArray = (length, min, max) => {
    const getrandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    return new Array(length).fill(0).map(() => getrandomInteger(min, max));

};


// 2 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 




// 3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
const getAverage = (...numbers) => {
    let numbersArray = []
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if(!Number.isInteger(numbers[i])){
           continue
        }
        numbersArray.push(numbers[i]);
        sum += numbersArray[i]
    }
    return sum / numbersArray.length
};

// 5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const filterEvenNumbers = (...numbers) => numbers.filter(numbers => numbers % 2 === 0);


// 6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

const countPositiveNumbers = (...numbers) => {
    const someNumbers = numbers.filter(numbers => numbers > 0);
    return someNumbers.length
};

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const getDividedByFive = (...numbers) => numbers.filter(numbers => numbers % 5 === 0);


// 8 розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
const replaceBadWords = (string, badWords = "fuck, shit", otherBadWords = "") => {
    const veryBadWords = badWords.split(", ").concat(otherBadWords.split(", "));
    let newStr = string;

    for (let i = 0; i < veryBadWords.length; i++) {
        newStr = newStr.split(veryBadWords[i]).join('*');
    }
    return newStr
};

// 9 творіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
const divideByThree = (string) => {

    let newString = string.trim().toLowerCase();
    let arr = [];

    if (newString.length < 3) {
        return string
    };

    for (let i = 0; i < newString.length; i += 3) {
        arr.push(newString.slice(i, i + 3));
    };
    return arr;
};


//10 Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
//десь є помилка бо працює не зовсім так як треба
const generateCombinations = (word) => {
    let arr = word.toLowerCase().split("");
    const  combinations = [];
    const toCounCombinations =(number)=>{
        if ( number ===  1) {
            return number ;
        } else {
            return number * toCounCombinations(number - 1);
        }
    }

    /*for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t
      
    }*/
    let randomArr = ""
    for (let k = 0; k < toCounCombinations(word.length); k++) {
        for (let i = arr.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t
            randomArr = arr.join('')
    }
    if(!combinations.includes(randomArr)){
    combinations.push(randomArr);
    }
    }
    return  combinations
}
   

console.log(generateCombinations("man")) 

console.log(`Функція №1: ${getRandomArray(100, 1, 10)}`);
//console.log(`Функція №2: ${}`);
console.log(`Функція №3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 12.6)}`);
//console.log(`Функція №4: ${}`);
console.log(`Функція №5: ${filterEvenNumbers(1, 2, 3, 4)}`);
console.log(`Функція №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);
console.log(`Функція №7:${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Функція №8:${replaceBadWords("Are you fucking asshole shit ?", "fuck, shit", "ass")}`);
console.log(`Функція №9:${divideByThree("Live")}`);
console.log(`Функція №10:${generateCombinations("man")}`);
