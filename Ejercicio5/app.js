let numbers = [3, 6, 1, 8, 2, 6, 3, 2, 5, 6];

function findMostDuplicated(array) {
    let counts = {};
    let mostDuplicated = null;
    let maxCount = 0;

    array.forEach(function(element) {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxCount) {
            mostDuplicated = element;
            maxCount = counts[element];
        }
    });

    return mostDuplicated;
}

console.log(findMostDuplicated(numbers)); // Output: 6