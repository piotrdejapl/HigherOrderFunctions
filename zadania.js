

// Zadanie #1 -> znajdź wyszystkie słowa występujące w body i zrób tablicę zawierającą liczbę wystąpienia tych słów
// to zadanie z tablicy -> https://jsonplaceholder.typicode.com/posts

// docelowo chcę uzyskać coś takiego:

const words = [
  {
    "word": "quia",
    "count": "126"
  },
  {
    "word": "et",
    "count": "25"
  },
  {
    "word": "recusandae",
    "count": "41"
  }
];


// Attempt -> tu mi coś nie wyszło, wysyłam to na czym się zatrzymałem

const wordsArray = posts.map(post => 
post.body
    // pobierz tylko wartości samych body, następnie podziel kazdy body na 'kawałki', gdzie każdy kawałek będzie pojedynczym słowem
    .split(' '))
    // dodaj wszystkie tablice ze słowami do jednej tablicy
    .reduce((a, b) => a.concat(b))
    // stwórz tablice jak w rozwiązaniu
    .map((element,idx,array1) => {
        let AllWords = { ...array1 };
        return AllWords;
    })
    .filter((element,index,array2) => array2.indexOf(element) === index)
    .map((word,idx,array) => {
        let trew = { ...AllWords };
        return {
            "word": word,
            // przefiltruj array pod kątem danego słowa
            "count": trew.filter(element => element = word ).length
        }
    });







// Zadanie #2

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or...
// ...There will be no Python developers if no Python developer has signed up.


var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];


function pythonDevelper(list1) {

    let rewq = {};
    rewq = list1.find(element => element.language === 'Python');
    if (rewq) {
        return rewq.firstName + ', ' + rewq.country;
    }
    return 'There will be no Python developers';
}


console.log(pythonDevelper(list1));






// Zadanie #3
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return either:
// true if all developers in the list code in the same language; or false otherwise.

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


const sameLanguage = list1
    .every(e => e.language === list1[0].language);

console.log(sameLanguage);