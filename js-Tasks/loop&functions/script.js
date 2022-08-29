// ---------------_Ex1_-------------------

// //Correct the syntax error
// [1, 7, 9, 45]
// [("Str", "alex", "moh")]
// [("the", "fox", "over", "lazy", "dog")];

// // ---------------_Ex2_-------------------

// //What the index of "Banana_1_","Tomato_0_"
// var fruits = ["Tomato", "Banana", "Watermelon"];

// // ---------------_Ex3_-------------------

// let favFood = ["Shawerma", "Mansaf", "Parbique", "Pizza", "Kubbah"];
// let favSport = ["Futball", "Billiars", "Swimming", "Tennis"];
// let favMovie = ["Ninja Assassin", "Jason Bourne", "Mechanic"];

// ---------------_Ex4_-------------------
// let m = [1, 2, 3, 4]
// function firstOfArray(m) {
//     console.log(m[2])
// }
// firstOfArray(m);

// ---------------_Ex5_-------------------
// let m = [1, 2, 3, 4 ,34,56,343,8,43,63]
// x = m.length
// console.log(m[x-1])

// ---------------_Ex6_-------------------

// let array = ['push'];
// array.push('shift', 'unshift')
// array.unshift('pop');
// console.log(array)

// ---------------_Ex7_-------------------
// push---the new length of the array
// unshift---the new length of the array
// shift---returns the removed element
// pop---returns the removed element

// ---------------_Ex8_-------------------

// let array1 = [2, 4, 6, 8];
// function doubleValues(array1) {
//     console.log(array1)
//   let d1 = array1[0] * 2;
//   let d2 = array1[1] * 2;
//   let d3 = array1[2] * 2;
//   let d4 = array1[3] * 2;
//   let array2 = [d1, d2, d3, d4];
//   console.log(array2);
// }
// doubleValues(array1);

// ---------------_Ex9_-------------------
// let array1 = [1, 2, 3, 4, 5, 6]
// let array2 = []
// function onlyEvenValues(array1){

//     for (let i = 0; i < array1.length; i++) {
//         const element = array1[i];
//         if (element % 2 ==0) {
//             array2.push(element)
//             console.log(array2)
//         }
//     }

// }
// onlyEvenValues(array1)

// ---------------_Ex10_-------------------

// let array1 = ['Ammar', 'Basel', 'Malek', 'Kamal', 'Esam']
// let array2 = []
// function showFirstAndLast(array1) {
//     array2.push(array1[0][0] + array1[0][4])
//     array2.push(array1[1][0] + array1[1][4])
//     array2.push(array1[2][0] + array1[2][4])
//     array2.push(array1[3][0] + array1[3][4])
//     array2.push(array1[4][0] + array1[4][3])
//     console.log(array2)

// }
// showFirstAndLast(array1)

// ---------------_Ex11_-------------------

// let array = [1, 2, 3, 4, 5];

// function middleOfArray(array) {
//     let odd = array[Math.floor(array.length / 2)]

//     if (array.length % 2 == 1) {
//         console.log(odd);

//     } else {
        
//     }

    

    
// }
// middleOfArray(array);

// ---------------_Ex12_-------------------

// var animals = ['cat', 'ele', 'bird']
// animals[0] = ['cat','zebra', 'elephant']
// console.log(animals)

// ---------------_Ex13_-------------------
// let array = ['A', 'B', 'C', 'D', 'E']
// let x = array[3]
// function indexOfArray(x) {
//     console.log(x)

// }
// indexOfArray(x)

// ---------------_Ex14_-------------------

// let array = [1, 2, 3, 4, 5, 'alk']
// let x = array.length -1
// function arrayExceptLast(array) {
//     console.log(x)
//     console.log(array.slice(0,x))
// }
// arrayExceptLast(array)

// ---------------_Ex15_-------------------

// let array = [1, 2, 3, 4, 5, 6]
// let x = "A"
// function addToEnd(array,x) {
//     array.push(x)
//     console.log(array)

// }
// addToEnd(array, x)

// ---------------_Ex16_-------------------
// let array = [1, 4, 0, 9, -3];

// function sumArray(array) {
//     let sum = 0
//     for (i = 0; i < array.length; i++){
//         sum = sum + array[i]
//     }
//     console.log(sum)
// }
// sumArray(array)

// ---------------_Ex17_-------------------

// let array = [1, 4, 2, 9, -3];

// function sumArray(array) {
//     let x = 0
//     let sum = 0
//    while (x<array.length) {
//        x++
//        sum = sum + array[x]
//     }
//     console.log(sum)

// }
// sumArray(array)

// ---------------_Ex18_-------------------

// let array = [1, 4, 2, 9, -3];
 
// function removeFromArray(array,val) {
//     for (i = 0; i < array.length; i++){

//         if (array[i]==val) {
//             array.splice(i,1)
//         }
//     }
//     console.log(array)
// }
// removeFromArray(array,4)

// ---------------_Ex19_-------------------

// let array = [1, 2, 3, 4, 5, 6];
// let array1 = []
// function oddArray(array) {
//     for (i = 0; i < array.length; i++){
//         if (array[i]%2==1) {
//             array1.push(array[i])
//         }
//     }
//     console.log(array1)

// }
// oddArray(array)
// ---------------_Ex20_-------------------

// let array = [5, 10, 20, 10, 5];

// function sumArray(array) {
//     let sum = 0
//     for (i = 0; i < array.length; i++){
//         sum = sum + array[i]
//     }
//     console.log(sum/array.length)
// }
// sumArray(array)

// ---------------_Ex21_-------------------
// let array = ['sam', 'johny', 'alex', 'mike', 'mj', 'robert']
// let len = 0
// function shorterInArray(array) {

//     for (i = 0; i < array.length; i++){
//        len = Math.min(array[i])
//     }
//     console.log(len)
// }
// shorterInArray(array)

// ---------------_Ex22_-------------------
//repeatChar
// ---------------_Ex23_-------------------
// evenIndexOddLength
// ---------------_Ex24_-------------------
// powerElementIndex
// ---------------_Ex25_-------------------
// evenNumberEvenIndex
// ---------------_Ex26_-------------------

// let sub = 0
// function subtraction(n) {
//     while (n>0) {
//         n--
//         sub = n - n
//         console.log(sub=-n)
        
//     // console.log(sub)
//     }
  
// }
// subtraction(5)
// ---------------_Ex27_-------------------
// function factorial(n) {
    
//     while (n>=1) {
//         n--
//         let x = x*=n

//     }
//     console.log(x)
// }
// factorial(5)
// ---------------_Ex28_-------------------
// function repeatStr(s, n) {
//     let x = 0
//     while (x !== n) {
//         x--
//         console.log(s+"")
//     }
// }
// repeatStr("to", 4)
// ---------------_Ex29_-------------------
// sum2
// ---------------_Ex30_-------------------

///24