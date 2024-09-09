//Write a function to count the number of vowels in a string.

  function countVowel(str){
    let sumVowel=0;
    let sumcon=0;
for(let i=0;i<str.length;i++){
    if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
        sumVowel=sumVowel+1;
    }
 
   
}
return sumVowel;
}

const words="PRogramingHero";
const wordSmall=words.toLowerCase();
 let result=countVowel(wordSmall);
 console.log(result);