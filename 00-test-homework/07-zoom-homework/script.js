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

let user = {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    },
    getDetails() {
        const that = this;
        const buildString = function () {
            return `Name: ${that.name}, course: ${that.course}`;
        };
        const info = buildString();
        console.log(info)

    },
    changeName(name) {
        this.name = name
    },
    changeAge() {
        this.course = this.course + 1;
    }
};
//user.name = "Petro"
//console.log(user)
user.getDetails();
user.changeAge();
user.changeName('lev');
user.getDetails();

for (let key in user) {
    console.log(key, ":", user[key]);

}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log("subjects" in user);
console.log("surname" in user);

console.log(user.hasOwnProperty("subjects"))

/*let user = {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}*/
function getSubjects({ subjects }) {
    return Object.keys(subjects).map((subject) => subject[0].toUpperCase() + subject.slice(1))
};

console.log(getSubjects(students[0]))

// 2 Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента

function getAverageMarks({ subjects }) {
    const arrMarks = Object.values(subjects);
    const flatered = arrMarks.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
    const sum = flatered.reduce((acc, currentValue) => acc + currentValue, 0)

    return +(sum / flatered.length).toFixed(2)
};

console.log(getAverageMarks(students[0]))

// 3 Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту

function getStudentInfo({ name, course, subjects }) {

    return console.log(`{"course": ${course}, "name": ${name}, "averageMark":${getAverageMarks({ subjects })}}`)
};

console.log(getStudentInfo(students[0]))

// 4 Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    const getStudentsNamesPrevious = function ({ name }) {
        return arrName = Object.values(name);

    };
    const natureName = []
    for (let i = 0; i < students.length; i++) {

        natureName.push(getStudentsNamesPrevious(students[i]).join(""));
    };
    const sortName = natureName.sort()
    return sortName
};

console.log(getStudentsNames(students))
