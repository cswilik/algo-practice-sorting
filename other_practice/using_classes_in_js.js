// this is our blueprint of a student
class Student {
    // constructor method is used to instantiate new student instances
    constructor(firstName, lastName, year, tardy) {
        // when a new student is created, assign these properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year
        this.tardy = 0
        this.scores = []
    }
    // This is an instance method - you can call it on any of your Students you create
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardy ++;
        return `You have been late ${this.tardy} times`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a + b});
        return sum/this.scores.length;
    }
    // A class method - more like a utility function
    // use static to define them
    static enrollStudents(...students) {
        return "Enrolling Students!!!!"
    }
}

// now were using the above blueprint to create students.
let studentOne = new Student("Chelsey", "Swilik", 'senior')
let studentTwo = new Student("Kobe", "Swilik", 'freshmen')
// example of using class method
Student.enrollStudents(studentOne, studentTwo)

