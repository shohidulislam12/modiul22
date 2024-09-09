function addOdd(number){
    const oddArray=[];
for(let i=0;i<number.length;i++){
   if(i%2===1){
        oddArray.push(number[i]);
   }
}
sum=0;
for(let prop of oddArray){
      sum=sum+prop;
}
let avg=sum/oddArray.length;
return avg ;

}


const numbers=[12,23,14,17,16,19];
const result=addOdd(numbers);
console.log(result);
