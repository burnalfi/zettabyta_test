const { group } = require("console");

/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  // your code here
  var ordered = []
  let placeHolder;
  for (let idSt in students) {
    if (students[idSt - 1] == null) {
      ordered.push(students[idSt]);
    }
    if (students[idSt - 1] != null) {
      if (String(students[idSt].firstName.split("", 1)[0]) < String(students[idSt - 1].firstName.split("", 1)[0])) {
        ordered.push(students[idSt])
        students[idSt] = placeHolder;
        placeHolder = students[idSt - 1];
        students[idSt - 1] = students[idSt];
      } else {
        ordered.push(students[idSt]);
      }
    }
  }
  
  for (let i = 0; i < groups; i++){
    for (let l = 0; i < 2; i++) {

    }
  }

  return ordered
}

console.log(result(students, groups));
