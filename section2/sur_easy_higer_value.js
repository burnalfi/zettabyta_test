/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    // Your Code Here
    var greatest = 0;
    for (let x in numbers) {
        if (numbers[x] > greatest) {
            greatest = numbers[x];
        }
    }
    return greatest;
}

console.log(result(numbers));
