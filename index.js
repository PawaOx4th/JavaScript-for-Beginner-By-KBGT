// Primitive Type
const name = "PawaOx4th";
let height = 175;
let isMale = true;
let city;
let bigNumber = 10n;

console.log("name", name);
console.log("height", height);
console.log("isMale", isMale);
console.log("city", city);
console.log("bigNumber", bigNumber);

// Reference Type
//// Object
const person = {
  name: "PawaOx4th",
  height: 170,
  city: "Bangkok",
};
console.log("person", person);
console.log("person.name", person.name);

//  เปลี่ยนแปลงค่า properties
person.name = 'Kaen'
console.log("person.name", person.name);

//// Array 
const numbers = [
    5,10,15,20
] 
console.log("numbers", numbers)
console.log("numbers[2]", numbers[2])

// ใส่ค่า ข้างหลัง
numbers.push(25)
console.log("numbers.push(25)", numbers)

// ลบค่าด้านหลัง
numbers.pop(25)
console.log("numbers.pop(25)", numbers)

// ใส่ค่าข้างหน้า
numbers.unshift(25)
console.log("numbers.unshift(25)", numbers)

// ลบค่าด้านหน้า
numbers.shift()
console.log("numbers.shift()", numbers)
