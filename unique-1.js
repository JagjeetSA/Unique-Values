/*
Unique values only from 2 arrays i.e. union values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
[1, 2, 3, 4, 5, 6, 7, 8];               */


const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

function unique_arr(inputA,inputB){
    const output = [...inputA, ...inputB];
    for (let i=0; i<output.length-1; i++){
        //inputA[i]
        for (let j=i+1; j<output.length; j++){
            if(output[i] === output[j]){
                output.slice[j];


            }

        }
    console.log(output);    
    }
}








