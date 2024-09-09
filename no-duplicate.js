function noDuplicate(array){
let newnum=[];
  for(let item of array){
    if(newnum.includes(item)===false){
        newnum.push(item);
    }
  }
  return newnum;
}

const numbers =[23,23,3,2,4,5,4,6,54,56,54,45,65,45,5,];
const result=noDuplicate(numbers);
console.log(result);