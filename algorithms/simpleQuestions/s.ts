/**
 * sortByAge
 * Count objects based on age.
 *
 * @param inputArray Person[]. Array of Persons.
 * @returns occurrences number. The number of objects matching.
 */
type Person = {
    name: string;
    gender: string;
    age: number;
};

function sortByAge(inputArray: Person[]) {
    return inputArray.sort(comparePeople);
}

function comparePeople(x: Person, y: Person) {
    if (x.age > y.age) return 1;
    if (x.age < y.age) return -1;
    return 0;
}

const result = sortByAge([
    { name: "asdfasdf", gender: "m", age: 12 },
    { name: "asdfasdf", gender: "f", age: 32 },
    { name: "asdfasdf", gender: "m", age: 15 },
    { name: "asdfasdf", gender: "f", age: 43 },
    { name: "asdfasdf", gender: "m", age: 24 },
    { name: "asdfasdf", gender: "f", age: 31 },
]);
console.log(result);
