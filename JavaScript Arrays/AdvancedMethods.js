//Mapping

const friends = [
    { firstname: 'Jane', lastname: 'Doe' },
    { firstname: 'Marcus', lastname: 'lol' },
    { firstname: 'Santos', lastname: 'Doe' },
];

//2 ways to use map

// const fullName = friends.map((friend) => {
//     return friend.firstname + " " + friend.lastname;
// });
// console.log(fullName);

const fullName = friends.map((friend) => `${friend.firstname} ${friend.lastname}`);
console.log(fullName);

//filter()

const groceries = [
    { item: 'apples', type: 'fruit' },
    { item: 'careal', type: 'pantry' },
    { item: 'pork chops', type: 'meat' },
    { item: 'bananas', type: 'fruit' },
    { item: 'broccoli', type: 'vegetable' },
];

//Filter the following array to include only those grocery items: fruits

// const fruit = groceries.filter((item) => {
//     return item.type === 'fruit';
// });
// console.log(fruit);

const fruit = groceries.filter((item) => item.type === 'fruit');
console.log(fruit);

//reduce() 

const bills = [1200, 29.99, 65.93, 17.32, 44.76];

//Determine how much the total bills are using the reduce method
const totalBills = bills.reduce((total, bill) => total + bill);
console.log(totalBills);

//flatMap()

const wordJumble = ['shampoo', 'conditioner', 'soap'];

//split the word jumble into letters
const splitWords = wordJumble.flatMap((word) => word.split(''));
console.log(splitWords);

//Challange:

const movies = [
    {
        title: 'Avatar',
        year: '2009',
        rating: 'PG-13'
    },
    {
        title: 'I Am Legend',
        year: '2007',
        rating: 'PG-13'
    },
    {
        title: '300',
        year: '2006',
        rating: 'R'
    },
    {
        title: 'The Avengers',
        year: '2012',
        rating: 'PG-13'
    },
    {
        title: 'the Wolf of Wall Street',
        year: '2013',
        rating: 'R'
    },
];

//Question #1
//Create a new array that just contains the movie titles.
const movieTitles = movies.map((movie) => `${movie.title}`);
console.log(movieTitles);

//Question #2
//Create a new array that contains only those movies that are PG-13
const ratedMovies = movies.filter((movie) => movie.rating === 'PG-13');
console.log(ratedMovies);

//Question #3
//Determine how many of the movies are rating R.
const ratedR = movies.reduce((acc, movie) => {
    if (movie.rating === 'R') {
        acc++;
    }
    return acc;
}, 0);

console.log(ratedR);