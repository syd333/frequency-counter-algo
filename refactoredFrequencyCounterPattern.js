same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
// initialize two empty objects
// each one counts the individual values in the arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // for each element in array1
  // we are going to add one to frequencyCounter if already in object
  // or initialize key/value to 1 
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // if key squared is not in other object[key] then return false
  // is two squared of frequencyCounter1 (4) a key in frequencyCounter2
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // then do values of both objects matchup 
    //frequencyCounter2[key * 2] = object[key * 2]
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
same([1,2,3,2], [9,1,4,4])

//time complexity - linear O(n)
//console.log(frequencyCount1) = {1:1, 2:2, 3:1}
//console.log(frequencyCount2) = {1:1, 4:2, 9:1}