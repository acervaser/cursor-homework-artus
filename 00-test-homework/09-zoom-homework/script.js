
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }
    getInfo() {
        const char = this.fullName.split(" ")
        if (char[0].endsWith("а")) {
            return `Студентка ${this.course}го курсу ${this.university} ${this.fullName}`
        } else {
            return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
        };
    };

    get getMarks() {
        return this.marks
    };

    set setMarks(mark) {
        this.marks.push(mark)
    };

  get  getAverageMark() {
      return this.marks.reduce((sum, currentValue) => sum + currentValue, 0) / this.marks.length
    };
dismiss()
};

const andriy = new Student("ІФНТУНГ", 1, "Андрій Шевченко");

const ira = new Student("ІФНМУ", 2, "Іра Соколова");

const svitlana = new Student("ЧНУ", 3, "Світлана Щербина");

console.log(ira.getInfo());
console.log(andriy.getMarks);
andriy.setMarks = 5;
console.log(andriy.getMarks);
console.log(andriy.getAverageMark);

