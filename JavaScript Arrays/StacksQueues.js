//Stack: Last in, First Out
// push() - add more item in existing stack;  pop() - remove last item

const drinks = ["coffee", "tea", "soda", "water"];
drinks.push('wine');
console.log(drinks);

const seasons = ["spring", "summer", "fall", "winter"];

const poppedValue = seasons.pop();
console.log('Removed value:', poppedValue);
console.log('Seasons', seasons);

//Queues:
// unshift() - add one item on beggining of the array; shift() - remove content from beginning
const ages = [18, 33, 71, 29, 65, 62]
ages.unshift(36);
console.log(ages);

const holidays = ['Labor Day', 'Christmas', 'Hannakkuh', 'Independence Day'];

const shiftedValue = holidays.shift();
console.log(holidays);
console.log(shiftedValue);

const foods = [
    { food: 'raspberries', type: 'fruit' },
    { food: 'orange', type: 'fruit' },
    { food: 'brocolli', type: 'vegetable' },
    { food: 'quinoa', type: 'grain' },
];

const blackBeans = { food: 'black beans', type: 'legume'};
const chiaSeeds = { food: 'chia seeds', type: 'seed'};

//Question #1
//Remove the last item in the foods array
foods.pop();
console.log(foods);

//Question #2
//Remove the first item in the foods array
foods.shift();
console.log(foods);

//Question #3
//Add the bariable blakBeans to the beginning of the foods array
foods.unshift(blackBeans);
console.log(foods);

//Question #4
//Add the variable chiaSeeds to the end of the array
foods.push(chiaSeeds)
console.log(foods);