const today= new Date();
console.log(today.toLocaleTimeString());

let a=3;
let b=4;
let c=a;
 a=b;
 b=c
 console.log(a);
 console.log(b);

 for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}