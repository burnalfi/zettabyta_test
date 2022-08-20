// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
  var newData = {};
  var placeHolder;

  for (let x in data) {
    if (data[x] == null) {
      data[x] = 0;
    }
    data[x] = data[x] * 3;
  }

  for (let y in data) {
    newData[y] = data[y];
    if (data[y] < data[y - 1]) {
      placeHolder = data[y - 1];
      newData[y - 1] = data[y]
      newData[y] = placeHolder
    }
  }

  return newData;
}

console.log(result(data));
