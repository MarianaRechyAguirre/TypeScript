(()=>{

let avenger: any = 123;
let exists;
let power;

avenger = "Dr Strange";
console.log((avenger as string).charAt(0));
//avenger as string es un tipo de casteo

avenger= 150.23256415;
console.log(<number>avenger.toFixed(2));
//tambien es casteo con <number>

console.log(exists)
console.log(power);

})()