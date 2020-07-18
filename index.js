/* Condition  */

// if else

const age = 25;
if (age > 18) {
  console.log("age > 18");
} else {
  console.log("age < 18");
}

/* 
    เท่ากับ           ===
    ไม่เท่ากับ         !==
    มากกว่า          >
    น้อยกว่า          <
    มากกว่า เท่ากับ    >=
    น้อยกว่า เท่ากับ    <=

    and             &&
    or              ||
    not             !
*/

//  Ex1.
let password = "abcdefghij";
if (password.length >= 8) {
  console.log("Password is valid!");
} else {
  console.log("Password is invalid!");
}

// Ex2.
let passwordEx2 = "abcdefgabcdefghijhij";
if (passwordEx2.length >= 8 && passwordEx2.length <= 12) {
  console.log("Password is valid!");
} else {
  console.log("Password is invalid!");
}

// Ex3.
let passwordEx3 = "";

if (passwordEx3 === "") {
  console.log("passwordEx3 is required");
} else if (passwordEx3.length >= 8) {
  console.log("Password is valid!");
} else {
  console.log("Password is invalid!");
}
