// 1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 

const getRandomArray = (length, min, max) => {
    const getrandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    return new Array(length).fill(0).map(() => getrandomInteger(min, max));

};

// 2 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 

const getModa = (...numbers) => {
    if (numbers.length === 1) {
        return numbers[0]
    }
    const numberFrequency = numbers.reduce((acc, number) => {
        if (acc[number]) {
            acc[number]++
        } else {
            acc[number] = 1
        }
        return acc
    }, {})

    const maxFrequency = Math.max(...Object.values(numberFrequency))
    const frequency = Object.entries(numberFrequency)
    const modArr = (frequency).filter(frequency => frequency[1] === maxFrequency)

    return modArr
};

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 55, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// 3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

const getAverage = (...numbers) => {
    const numbersArray = []
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (!Number.isInteger(numbers[i])) {
            continue
        }
        numbersArray.push(numbers[i]);
        sum += numbersArray[i]
    }
    return sum / numbersArray.length
};

// 4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.

const getMedian = (...numbers) => {
    if (numbers.length % 2 !== 0) {
        return numbers[Math.floor(numbers.length / 2)]
    } else {
        const secondAvarageNumber = numbers[(numbers.length / 2)];
        const firstAvarageNumber = numbers[(numbers.length / 2) - 1]
        return Math.floor((secondAvarageNumber + firstAvarageNumber) / 2)
    };
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
        newStr = newStr.split(veryBadWords[i]).join('****');
    }
    return newStr
};

// 9 творіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
const divideByThree = (string) => {

    const newString = string.trim().toLowerCase();
    const arr = [];

    for (let i = 0; i < newString.length; i += 3) {
        arr.push(newString.slice(i, i + 3));
    };
    return arr;
};

//10 Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.

const generateCombinations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    }
  
    if (string.length < 2 ){
      return string
    }
  
    const permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
     
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of generateCombinations(remainder)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  };

console.log(`Функція №1: ${getRandomArray(100, 1, 10)}`);
console.log(`Функція №2: ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Функція №3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 12.6)}`);
console.log(`Функція №4: ${getMedian(1, 2, 3, 4)}`);
console.log(`Функція №5: ${filterEvenNumbers(1, 2, 3, 4)}`);
console.log(`Функція №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);
console.log(`Функція №7:${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Функція №8:${replaceBadWords("Are you fucking asshole shit ?", "fuck, shit", "ass")}`);
console.log(`Функція №9:${divideByThree("Live")}`);
console.log(`Функція №10:${ generateCombinations("man")}`);
