//Iterating through array with forEach

const fruits = ["apple", "banana", "orange"];


fruits.forEach((element) => {console.log(element)});



const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log('Score over 65', score);

scores.forEach((element) => {
    if (element > 65) {
        logScore(element);
    }
})


//Order arrays with sort

console.log("Sorting");
//ordered alphabetically
const pets = ['dog', 'cat', 'rabbit', 'hamster'];
console.log(pets.sort()); 

//ordered from highest to lowest
const grades = [88, 84, 72, 99, 53, 75];
grades.sort((a, b) => b - a);
console.log(grades);

//oredered from lowest to highest
grades.sort((a, b) => a - b);
console.log(grades);

//Reverse order of array -- reverse()
const condiments = ['ketchup', 'mustard', 'relish', 'mayo'];
console.log(condiments.reverse());

//NOTE TO clone an arrya use = [...arrayName]!!!
//reverse without affecting an array
const employees = ['Adams', 'Carter', 'Davis', 'Franklin', 'zappa'];

const reversed = [...employees];
console.log('reversed', reversed.reverse());
console.log('original', employees);

//Find a single element with find() and findIndex()
const grades1 = [99, 83, 87, 91, 77];

const underEighty = grades1.find((element) => element < 80);
console.log(underEighty);

const overEighty = grades1.findIndex((element) => element > 80);
console.log(overEighty);

//FIRST CHALLANGE 

const students = [
    { name: 'John', grade: 75 },
    { name: 'Daniel', grade: 95 },
    { name: 'Mike', grade: 87 },
    { name: 'Langys', grade: 92 },
];

//Challange question #1
//Sort the array of students based on their grade,
//in descending order(largest to smallest).
const gradeStudents = [... students];
gradeStudents.sort((a,b) => b.grade - a.grade);
console.log(gradeStudents);

//Challange question #2
//After sorting the arrya, reverse the order of the array.
const reverseGradeStudents = [...gradeStudents].reverse();
console.log(reverseGradeStudents);

//Challange Question #3
//Find a student in the array who has a grade over 90.
const overNinety = students.find((element) => element.grade > 90);
console.log(overNinety);



