const careers = ['teacher', 'doctor', 'engineer', 'nurse', 'student'];

//Does the careers array include a nurse?
//Key sensitive!
const nurseIncluded = careers.includes('nurse');
console.log(nurseIncluded);

// some() - at least one meets criteria then its true
// every() - if every meet criteria then its true

const states = ["California", "New York", "New Jersey", "Alaska", "New Mexico", "Montana"];

//Do some of the states in the array start with "New"?
const someStates = states.some((state) => state.startsWith('New'));
console.log(someStates);

//Does every state in the array start with "New">
const everyState = states.every((state) => state.startsWith('New'));
console.log(everyState);


//Challange 
const bowlingScores = [154, 204, 300, 184, 286];

//Question #1
//Does the arrya of bowling scores include a 300?
const scoresIncluded = bowlingScores.includes(300);
console.log(scoresIncluded);

//Question #2
//Are some if the scores under 150?
const someScores = bowlingScores.some((score) => score < 150);
console.log(someScores);

//Question #3
//Is every score an even number?
const everyScore = bowlingScores.every((score) => score % 2 === 0);
console.log(everyScore);


