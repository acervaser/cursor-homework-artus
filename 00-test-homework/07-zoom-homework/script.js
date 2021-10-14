const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }

},

];

//1 Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const getSubjects = function ({ subjects }) {
    return Object.keys(subjects).map((subject) => subject[0].toUpperCase() + subject.slice(1)).join(",").replaceAll('_', ' ').split(",");

};


// 2 Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента

const getAverageMarks = function ({ subjects }) {
    const arrMarks = Object.values(subjects);
    const flatered = arrMarks.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
    const sum = flatered.reduce((acc, currentValue) => acc + currentValue, 0)

    return +(sum / flatered.length).toFixed(2)
};


// 3 Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту

const getStudentInfo = function getStudentInfo({ name, course, subjects }) {
    return (`"course": ${course}, "name": ${name}, "averageMark":${getAverageMarks({ subjects })}`)
};


// 4 Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = function (students) {
    const getStudentsNamesPrevious = function ({ name }) {
        return arrName = Object.values(name).join("");
    };
    const natureName = [];
    for (let i = 0; i < students.length; i++) {

        natureName.push(getStudentsNamesPrevious(students[i]));
    };
    const sortName = natureName.sort()
    return sortName
};


//5 Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = function (students) {
    const getStudentsNamesPrevious = function ({ name }) {
        return arrName = Object.values(name).join("");
    };
    const arrMarks = []
    for (let i = 0; i < students.length; i++) {
        arrMarks.push(((getAverageMarks(students[i]))))

    };
    let maxMarks = 0;

    for (let i = 0; i < arrMarks.length; i++) {

        if (arrMarks[i] > maxMarks) {

            maxMarks = (arrMarks[i]);
        };
    };
    let bestStudent = ""
    for (let i = 0; i < students.length; i++) {
        let mark = getAverageMarks(students[i])
        if (mark === maxMarks) {
            bestStudent = (getStudentsNamesPrevious(students[i]))
        }
    };
    return bestStudent
};

// 6 Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = (word) => {
  
    const letterFrequency = word.split('').reduce((acc, letter) => {
        if (acc[letter]) {
            acc[letter]++
        } else {
            acc[letter] = 1
        }
        return acc
    }, {})
    const frequency = Object.entries(letterFrequency)
    const arrFrequency = []
    for (let i = 0; i < frequency.length; i++) {
        arrFrequency.push(frequency[i].join(":"))
    }
    return arrFrequency
};


console.log(`Функція №1: ${getSubjects(students[0])}`);
console.log(`Функція №2: ${getAverageMarks(students[0])}`);
console.log(`Функція №3: ${getStudentInfo(students[0])}`);
console.log(`Функція №4: ${getStudentsNames(students)}`);
console.log(`Функція №5: ${getBestStudent(students)}`);
console.log(`Функція №6: ${calculateWordLetters("тест")}`);