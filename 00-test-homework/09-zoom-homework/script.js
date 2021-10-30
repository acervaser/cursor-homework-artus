
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.isExpelled = false
    };
    getInfo() {
        if (this.isExpelled === false) {
            const char = this.fullName.split(" ")
            if (char[0].endsWith("а")) {
                return `Студентка ${this.course}го курсу ${this.university} ${this.fullName}`
            } else {
                return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
            };
        } else {
            return "Студент відрахований"
        };
    };


    get getMarks() {
        return this.isExpelled ? null : this.marks;
    };

    set setMarks(mark) {
        return this.isExpelled ? null : this.marks.push(mark);
    };

    get getAverageMark() {
        return this.isExpelled ? null : this.marks.reduce((sum, currentValue) => sum + currentValue, 0) / this.marks.length
    };
    dismissStudent() {
        this.isExpelled = true
        return "Відрахувати студента"
    };

    recoverStudent() {
        this.isExpelled = false
        return "Поновити студента"
    };

};

const andriy = new Student("ІФНТУНГ", 1, "Андрійко ");

const ira = new Student("ІФНМУ", 2, "Іра Соколова");

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        const salute = setInterval(() => this.getScholarship(), 30000);
        setTimeout(() => { clearInterval(salute) }, 30000)
    }
    getScholarship() {
        if (this.isExpelled === false && this.getAverageMark >= 4) {
            console.log('Ви отримали 1400 грн. стипендії');
        } else {
            console.log('Старайтеся краще');
        }
    };
};

console.log(ira.getInfo());

console.log(andriy.getMarks);

andriy.setMarks = 5;

console.log(andriy.getMarks);

console.log(andriy.getAverageMark);

console.log(andriy.dismissStudent());

andriy.setMarks = 5;

console.log(andriy.getMarks);

console.log(andriy.recoverStudent());

console.log(andriy.getMarks);

const marta = new BudgetStudent("ІФНМУ", 3, "Марта Вонс");

console.log(marta);

marta.setMarks = 1;

const svitlana = new BudgetStudent("ЧНУ", 3, "Світлана Щербина");

console.log(svitlana);






