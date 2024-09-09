//Write a function to find the longest word in a given string.

// function largWord(sen){
//    let words=sen.split(" ");
//   let  largWord=" ";
//    for(let word of words){
//     if(word.length>largWord.length)
//       largWord=word;

// }
// return largWord;
// }


function largWord(sen){
   let words =sen.split(" ");
   let  largWord=" ";
for (let word of words){
   if(largWord.length<word.length){
      largWord=word;
   }
}
return largWord;
}


const sentance= "I am learning Proggggramming to become a programmer";
const result=largWord(sentance);
console.log(result);
