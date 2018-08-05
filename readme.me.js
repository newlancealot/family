ar numbers = [1, 2, 3, 4, 5];

function sumArray(numbers, cb) {
  var sum = numbers.reduce(function(sum, currentValue) {
    return sum + currentValue;
  }, 0);
  cb(sum);
}

function outputSum(sum) {
  console.log("The sum is " + sum);
}

function addTwo(sum) {
  console.log(sum + 2);
}
//ddd

sumArray(numbers, outputSum);
sumArray(numbers, addTwo);