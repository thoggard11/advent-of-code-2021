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

// Day 2 Puzzle 1
// Determines ship's horizontal and vertical position and multiplies the values
function horizontalDepthMultiply(input) {
    const movementArr = input.split('\n');
    let verticalDistance = 0;
    let horizontalDistance = 0;

    for (let i = 0; i < movementArr.length; i++) {
        const [direction, distance] = movementArr[i].split(' ');
        //console.log(direction + "  " + distance);

        if (direction === 'forward') {
            horizontalDistance += Number(distance);
        } else if (direction === 'up') {
            verticalDistance -= Number(distance);
        } else if (direction === 'down') {
            verticalDistance += Number(distance);
        } else {
            console.log("input did not have an accepted direction: " + direction);
        }
    }

    //console.log(verticalDistance);
    //console.log(horizontalDistance);
    return verticalDistance * horizontalDistance;
}

// Day 2 Puzzle 2
// Determines ship's depth and horizontal position and multiplies the values
function depthMultiplyByAim(input) {
    const movementArr = input.split('\n');
    let aim = 0;
    let depth = 0;
    let horizontalDistance = 0;

    for (let i = 0; i < movementArr.length; i++) {
        const [direction, distance] = movementArr[i].split(' ');
        //console.log(direction + "  " + distance);

        if (direction === 'forward') {
            horizontalDistance += Number(distance);
            depth += aim * distance;
        } else if (direction === 'up') {
            aim -= Number(distance);
        } else if (direction === 'down') {
            aim += Number(distance);
        } else {
            console.log("input did not have an accepted direction: " + direction);
        }
    }

    console.log(depth);
    console.log(horizontalDistance);
    return depth * horizontalDistance;
}