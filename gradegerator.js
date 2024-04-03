//1. grade generator
function generateGrade(marks) {
    if (marks > 79) {
        return 'A';
        //if a students mark is greater than 79 the function will return A
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
        //if a students mark is greater than 60 but les than 79 the function will return a B
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

console.log(generateGrade());

