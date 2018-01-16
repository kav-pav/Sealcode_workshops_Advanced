console.log("start");
const anArray = new Array(-1);//Range error
anArray.push("0");
console.log(anArray);

const width = 12;
console.log(width * height); //refernce error

let list = ['element 1', 'Element 2'
'Element 3']; //syntax error
console.log(list[0].upperCase()); //type error

width.toFixed(30); //range error

const user = {
    first name: "Bartek", //syntax Eroor
    lastName: "Nowak",
    age: 25
}
console.log(user.age.toString()); //type error
