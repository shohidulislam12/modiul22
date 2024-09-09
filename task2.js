//You are given an array of numbers. Count how many times the a number is repeated in the array.

 function fund(array,found){
    let sum=0;
  for( let prop of array){
    if(prop===find){
         sum=sum+1;
         
    }
    else {
        sum=sum;
    }
  }
  return sum;

 }

 numbers = [5,6,11,12,98, 5]
//find 5
numbers = [5,6,11,5,5,5,12,98, 25]
//find 25
const find= 8;
const result= fund(numbers,find)
console.log( " number of " + find +  " present "+ result +' times' );