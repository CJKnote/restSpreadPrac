// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

const filterOutOdds = (...arguments) => arguments.filter(num => num %2 === 0);