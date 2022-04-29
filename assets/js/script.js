//Practice

// console.log(typeof null);
// function EvenNumber(array){
// 	var count = 0;
// 	for(let i = 0 ; i < array.length; i++) {
// 		if (typeof array[i] == "number" && array[i] % 2 === 0){
// 			count++;
// 		}
// 	}
// 	return count;
// }
// let array=[2,8,5,4,2,3,4,"sad", true, null,"10"]
// console.log(EvenNumber(array));



// console.log(sum(1,2,3,4,5));
// function sum() {
//     let sum;
//     for (let i = 0; i < arguments.length; i++) {
//        sum+=arguments[i];
        
//     }
//     return sum;

//  }


function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
 
 


//Ders

// prompt();


//let num=0;
//while (num<20) {
  //  console.log(num++);
//}

// let num=5
// do {
//     console.log("Number");
// } while (num>10);


// let arr=[1,2,3,4,5];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }


// array.forEach(element => {
//     console.log(element)
// });


// let age=prompt();
// switch (age) {
//     case "18":
//         alert("18");
//         break;
//         case "20":
//         alert("20");
//         break;

//     default:
//         alert("not found");
//         break;
// }