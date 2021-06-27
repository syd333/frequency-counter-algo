// write a function called same, which accepts two arrays
// the function should return true if every value in the array
// has its corresponding value squared in the second array.
// the frequency of values must be the same.

same = (arr1, arr2) => {
  // two arrays as parameter
  // if arr1 && arr2 are not the same length
  // return false
  // if each index in arr2 is double each index in arr1
  // return true
  // otherwise false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // iterate over arr1
  for (let i = 0; i < arr1.length; i++) {
      // what is indexOf one squared in index 2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if correct index is not in array
    // return false
    if (correctIndex === -1) {
      return false;
    }
    // removes squared match from array 
    arr2.splice(correctIndex, 1);
  }
  return true;
};

//[1, 2, 3, 2], [9, 1, 4, 4]
// line 19: if had [1, 5, 2, 3, 2] -- and if 25 is not in second arr
// return false 