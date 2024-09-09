function inchToFeet(inch){
    const feetFraction =inch/12;
    const feet=parseInt(feetFraction)
    const inchh=inch%12;
  const results= feet + " ft "+ inchh+ " inch "
    return results;
   

}
let result=inchToFeet(14);
console.log(result);