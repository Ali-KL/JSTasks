
// let num1 = 10
// let num2 = 5
// let num3 = 25

// let text1 = "What a very ";

// console.log(num1 + num3);
// console.log(num1 * num2);
// console.log(num3 - num1);
// console.log(num3 / num2);
// console.log(--num3);
// console.log(++num3);                      //operatoers
// console.log(num3 += 20);
// console.log(num3-= 5);
// console.log(num3);
// console.log(text1 += "nice day");
// console.log("Price " + num3);
// console.log(num1 == num3);
// console.log(num1 != num3);
// console.log(num1 === num3);
// console.log(num1 !== num3);

//----------------------------------------------
// const dAge = prompt("Enter Age In Human Years : ");
// let agee = dAge * 7;

// if (agee > 0) {
//   window.alert("Your Doggie Is " + agee + " Years Old In Dog Years! ")
// } else {
// window.alert(" You Entered A Wrong Value. Age Cannot Be Negative!!")
// }


//----------------------------------------------
// //back tick
// let coderLifeStyle = `Code
// Eat
// Sleep
// Repeat`;

// console.log(coderLifeStyle);



//------------TellFortune _1_----------------------

function fortune(partner,job,location,children) {

  console.log("samer will be working as " + job + " in " + location + " married to " + partner + " with " + children + " children ");
}
fortune("Alice", "Full-Stack Freelancer", "Jordan", 4)

//---------------DogAge_2_----------------------

function calculateDogAge(puppysAge) {
  
  let agee = puppysAge * 7;
  console.log("Your Doggie Is " + agee + "Years Old In Dog Years! ")
}
calculateDogAge(3);

//---------------CalculateSupply_3_----------------------

function calculateSupply(age, perday) {
  let restY = 100 - age;
  let restD = restY * 365;
console.log("You will need " + (restD*perday) + " cups of tea to last you until the ripe old age of 100")
}

calculateSupply(40, 5);

//---------------greetName_4_----------------------

function greet(name) {
  console.log("Hello " + name )
}
greet("Samer");

//---------------locateTheError_5_----------------------

//what is the error:
function double(cat) {
  return 2 * cat;          //x undefined
}

function double(l) {          //number parameter 
  return 2 * l;           
}

function double(o) {
  return 2 * o;            //number*string
}

//---------------correctTheFunction_6_----------------------

//fix these functions:
function double1(x) {
  return 2 * x;
}

function double2 (x){
return 2 * x;
}

function double3(x) {
  return 2 * x
};

//---------------Cube _7_----------------------

function cube(y) {
  return y ** 3
}

console.log(cube(4))

//---------------Multiply _8_----------------------

function multi(A,B) {
  return A*B
}
console.log(multi(20, 5));

//---------------drivingLicense _9_----------------------

function canIGetADrivingLicense(yourAge) {
  if (yourAge >= 20) {
    console.log("Yes You Can")
  } else {
   let resty = 20 - yourAge;
    console.log("please come back after " + resty + " years to get one")
  }
}
canIGetADrivingLicense(15)

//---------------sameLength _10_----------------------

function sameLength(word1, word2) {
  if (word1.length == word2.length) {
    console.log(true)
  } else {
    console.log(false)

  }
}
sameLength("house", "door")

//---------------largerNubmer _11_----------------------

function largerNubmer(x1, x2) {
  if (x1>x2) {
    console.log(x1)
  } else {
    console.log(x2)
  }
}
largerNubmer(7, 20)

//---------------smallerNubmer _12_----------------------

function smallerNubmer(y1, y2, y3) {
  if (y1<y2 && y1<y3) {
    console.log(y1)
  } else {
    if (y2<y1 && y2<y3) {
      console.log(y2)

    } else {
      console.log(y3)
    }
  }
}
smallerNubmer(5,3,1)

//---------------shorterString _13_----------------------
  
// function shorterString(q, w, e, r, t)

// let len = Math.min(q.length,w.length,e.length,r.length,t.length)

//---------------longerString _14_----------------------


//---------------isEven _15_----------------------

function isEven(E) {
  if (E%2==0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
isEven(5)

//---------------isOdd _16_----------------------

function isOdd(E2) {
  if (E2 % 2 !==0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
isOdd(5)

//---------------positive _17_----------------------

function positive(E3) {
  if (E3 > 0 ) {
    console.log(E3)
  } else {
    console.log(Math.abs(E3))
  }
}
positive(-10)

//---------------fullName _18_----------------------

function fullName(firstName, lastName) {
  
  console.log("full name is " +firstName + lastName)

}
fullName("Hasan ", "Kholani");

//---------------average _19_----------------------

function average(n1, n2, n3, n4, n5,) {
  
  let total = n1 + n2 + n3 + n4 + n5
  let ave = total/5
console.log(ave)
}

average(10, 10, 5, 20, 5);

//---------------randomNumber _20_----------------------

function randomNumber() {
  
  let value2 = Math.random() * 1;
  console.log(value2)
}
randomNumber()

//---------------randomBetweenNumbers _21_----------------------

function randomBetweenNumbers(min, max) {
  console.log( Math.random() * (max - min) + min)
}
randomBetweenNumbers(3,9)

//---------------scoreInUniversty _22_----------------------

// function scoreInUniversty(y1) {
//   if (y1 >= 95 && y1<= 100) {
//     console.log("A")
//   }
//   else if (y1 >= 85 && y1 <= 94) {
//       console.log("B")
//   }
//   else if (y1 >= 70 && y1 <= 84) {
//       console.log("C")
//   }
//   else if (y1 >= 50 && y1 <= 69) {
//       console.log("D")
//   }
//   else if(y1 >= 0 && y1 <= 49) {
//       console.log("F")
//   }
// }
// scoreInUniversty(96)

console.log("Switch Statement")

function SS(y1) {

  switch (y1 > 0) {
    
    case  y1 >= 95 && y1 <= 100:
      console.log("A")
      break;
    
    case y1 >= 85 && y1 <= 94:
      console.log("B")
      break;
    
    case y1 >= 70 && y1 <= 84:
      console.log("C")
      break;
    
    case y1 >= 50 && y1 <= 69:
      console.log("D")
      break;
    
    default:
      y1 >= 0 && y1 <= 49
      console.log("F")
      break;
  }
  
}
SS(97);
SS(90);
SS(75);
SS(60);
SS(45);



//---------------counter _23_----------------------

// function counter()
// for (let step = 0; step < 5; step++) {
//   console.log('Walking east one step');
// }
// counter()

//---------------resetCounter _24_----------------------



