// 1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (massive) => {
    const boys = [];
    const girls = [];

    for (let char of massive) {
        if (char.endsWith("а")) {
            girls.push(char);
        } else {
            boys.push(char)
        };

    };

    const pairs = [];
    for (let i = 0; i < boys.length; i++) {
        pairs.push(((boys[i].split(" ")).concat(girls[i].split(" "))));
    };
    return pairs
    /* for (let i = 0; i < boys.length; i++) {
         pairs.push(boys[i].concat(girls[i]));
     };
     return pairs*/

    /* for (let i = 0; i < boys.length; i++) {
        pairs.push((boys[i].concat(girls[i]).split(" ")));
    };
    return pairs*/


};
console.log(getPairs(students));

// 2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const getThemes = (themes) => {
    const studentPairs = [];
    for (let i = 0; i < themes.length; i++) {

        studentPairs.push(getPairs(students)[i].join(" і ").split(","));
    }
    const studentsThemes = [];

    for (let i = 0; i < themes.length; i++) {

        studentsThemes.push((studentPairs[i]).concat(themes[i].split()));
    };
    return studentsThemes
};

console.log(getThemes(themes));

// 3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const getPoint = (students, girls) => {
    const studentMarks = [];
    for (let i = 0; i < girls.length; i++) {
        studentMarks.push(((students[i].split(" ")).concat(girls[i].toString().split(" "))));

    };
    return studentMarks
}

console.log(getPoint(students, marks));