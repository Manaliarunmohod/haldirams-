const makesandwitch=require("./add")

console.log(makesandwitch);

makesandwitch.makesandwitch();

function Something(a){
    a=2;
    return a;
}
let a=1;
console.log(Something(a))
console.log(a);

function Somehing(b){
    b= {name:"mina"};
    return b;
}
let b={name:"mani"};

console.log(Somehing(b))
console.log(b);



let c={name:"pihu"};
let d=c;
d.name="janu";
console.log(c);
console.log(d);