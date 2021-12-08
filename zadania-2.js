


// Zadanie #1
// link do zadania -> https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer

const oldestPerson = list1
.sort((dev1, dev2) => dev1.age - dev2.age)
// teraz zwróć wszystkie które mają ten sam wiek co ostatni
.filter((element,index,array) => element.age === array[array.length-1].age);




// Zadanie #2
// link do zadania -> https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented

const searchGeographicZones = () => {
  const geoZones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  let arr = [];
  // foreach nic nie zwraca, więc trzeba samemu jakoś wynik wychwycić i dodać do tablicy
  geoZones.forEach(zone => {
   return arr.push(list1.some(item => item.continent === zone));
  });
  const result = arr.filter(item => item == true);
  // chcę zwrócić true jeśli array.length jest równe geoZones.length
  return result.length === geoZones.length ? true : false;
}



// Zadanie #3
// link do zadania -> https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

const isAgeDiverse = () => {
  const ageGroups = [[10, 20], [20,30],[30,40],[40,50],[50,60],[60,70],[70,80],[80,90],[90,100], [100,199]];
  let arr = [];
  // foreach nic nie zwraca, więc trzeba samemu jakoś wynik wychwycić i dodać do tablicy
  ageGroups.forEach(ageGroup => {
   return arr.push(list1.some(item => item.age >= ageGroup[0] && item.age < ageGroup[1]));
  });
  const result = arr.filter(item => item == true);
  // chcę zwrócić true jeśli array.length jest równe geoZones.length
  return result.length === ageGroups.length ? true : false;
}



// Zadanie #4
// link do zadania -> https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames

const devsWithAddedUsername = list1.map(dev => {
    const currentYear = new Date().getFullYear();
    const newArr = {
        ...dev
    }
    return {
        ...newArr,
        username: dev.firstName.toLowerCase() + dev.lastName[0].toLowerCase() + (currentYear-dev.age)
    }
});