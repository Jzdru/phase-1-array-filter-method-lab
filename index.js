// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result
}

function fuzzyMatch(drivers, letters) {
    const result = drivers.filter(driver => driver.startsWith(letters));
    return result
}

function matchName(drivers, name) {
    const result = drivers.filter(driver => driver.name === name);
    return result
}
