/**
 * countProperties
 * Count objects based on property.
 *
 * @param inputArray Person[]. Array of Persons.
 * @param propertyName string. Property to count by.
 * @param propertyValue string. Property value to match with.
 * @returns occurrences number. The number of objects matching.
 */
type Person = {
    name: string;
    gender: string;
};

function countProperties(
    inputArray: Person[],
    propertyName: string,
    propertyValue: string
) {
    let count = 0;
    inputArray.forEach((element: Person) => {
        if (element[propertyName as keyof Person] === propertyValue) {
            count++;
        }
    });
    return count;
}

const result = countProperties(
    [
        { name: "asdfasdf", gender: "m" },
        { name: "asdfasdf", gender: "f" },
        { name: "asdfasdf", gender: "m" },
        { name: "asdfasdf", gender: "f" },
        { name: "asdfasdf", gender: "m" },
        { name: "asdfasdf", gender: "f" },
    ],
    "gender",
    "m"
);
console.log(result);
