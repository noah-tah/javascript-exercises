// find how old by subt
// people contains the array of objects
// for look is iterating over the objects so i expect it to print the objects
const findTheOldest = function(people) {
    let greatestAge = 0;
    let oldestPerson = '';
    let currentYear = new Date().getFullYear();
    let ageArray = [];
    for (let person of people) {
        if (person.yearOfDeath === undefined) {
            person.age = currentYear - parseInt(person.yearOfBirth);
        } else {
            person.age = parseInt(person.yearOfDeath) - parseInt(person.yearOfBirth);
        }
        if (person.age > greatestAge) {
            greatestAge = person.age;
            oldestPerson = person;
        }

    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
