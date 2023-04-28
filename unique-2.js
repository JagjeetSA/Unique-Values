/*

Unique values only from 2 arrays i.e. intersection values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
[1, 2, 3, 4, 5,];       */


const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

function intersection_arr(inputA, inputB) {
    function unique_elems(input) {
      const unique = [];
      for (let i = 0; i < input.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
          if (input[i] === unique[j]) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          unique[unique.length] = input[i];
        }
      }
      return unique;
    }
  
    const uniqueA = unique_elems(inputA);
    const uniqueB = unique_elems(inputB);
  
    const intersection = [];
    for (let i = 0; i < uniqueA.length; i++) {
      let isInUniqueB = false;
      for (let j = 0; j < uniqueB.length; j++) {
        if (uniqueA[i] === uniqueB[j]) {
          isInUniqueB = true;
          break;
        }
      }
      if (isInUniqueB) {
        intersection[intersection.length] = uniqueA[i];
      }
    }
  
    return intersection;
  }
  
  console.log(intersection_arr(inputA, inputB)); 