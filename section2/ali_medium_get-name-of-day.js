/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  // write your code here
  const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const today = new Date();
  const fourDaysAgo = today.getDay() - 4;
  return weekday[fourDaysAgo];
}

console.log(result());
