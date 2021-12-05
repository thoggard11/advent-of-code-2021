// Day 1 Puzzle 1
// Keeps count when elements of array increase in value
function countIncreasingValues(input) {
    const depthValues = input.split('\n').map(el => Number(el));
    let increaseCount = 0;

    for (let i = 0; i < depthValues.length - 1; i++) {
        if (depthValues[i] < depthValues[i + 1]) {
            increaseCount++;
        }
    }
    return increaseCount;
}

// Day 1 Puzzle 2
// Keeps count when elements of array, in groups of 3, increase in value
function countIncreasingValuesBy3(input) {
    const depthValues = input.split('\n').map(el => Number(el));
    let increaseCount = 0;

    for (let i = 0; i < depthValues.length - 3; i++) {
        if (depthValues[i] < depthValues[i + 3]) {
            increaseCount++;
        }
    }
    return increaseCount;
}