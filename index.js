// 01 - Fruits

// const fruits = ["mango", "lemon", "blueberry"]
// console.log (fruits)
// console.table(fruits)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - Access

// const ingredients = ["eggs", "milk", "butter"]
// console.log (ingredients[1])
// console.log (ingredients.indexOf("butter"))


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 03 - Add and Remove

// const objects = ["pen", "book", "lamp"]
// objects.unshift ("chair")
// console.log (objects)
// objects.pop ()
// console.log (objects)
// objects.push ("laptop")
// console.log (objects)
// objects.shift ()
// console.log (objects)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 04 - Order

// const numbers = [4, 10, 8, 12, 6]
// numbers.reverse ()
// console.log (numbers)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 05 - Boucle

// let total = 0
// const limit = 10

// for (i=0; i <= limit; i++) {
//     total = total + i
// }

// console.log (total)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 06 - Reverse

// const sentence = "Hello Konexio !"
// let ecnetnes = ""

// for (i = sentence.length -1; i >= 0; i--) {
//     ecnetnes += sentence [i]
// }

// console.log (ecnetnes)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 07 - Fizzbuzz

// for (i = 0; i <= 100; i++){
//     if (i % 7 === 0) {
//         console.log()
//     }else if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log ("FizzBuzz")
//     }else if (i % 5 === 0) {
//         console.log ("Buzz")
//     }else if (i % 3 === 0) {
//         console.log ("Fizz")
//     }else {
//         console.log (i)
//     }

//     // switch (i) {
//     //     case ((i % 7) === 0):
//     //         console.log()
//     //         break;        
//     //     case (((i % 3) === 0) && ((i % 5) === 0)):
//     //         console.log ("FizzBuzz")
//     //         break;
//     //     case ((i % 5) === 0):
//     //         console.log ("Buzz")
//     //         break;
//     //     case (i % 3 === 0):
//     //         console.log ("Fizz")
//     //         break;
//     //     default:
//     //         console.log (i)
//     // }
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 08 - While

// let total = 0
// const limit = 55

// while (total < limit) {
//     total = total + 1
// }

// console.log (total)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 09 - Sans boucle

// const camarades = ["Arthur", "Aurélien", "Cinnie", "Clara", "Danh", "Dushen", "Edaly", "Emad", "Florent", "Florez", "Jad", "Julien", "Lucas", "Lynda", "Magomed", "Wade", "Rayan", "Thomas", "Walid Belka", "Walid Belli"]
// console.log (camarades[Math.floor(Math.random()*camarades.length)])


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 10 - Random and max

// const array = []

// for (i=0; i < 20; i++) {
//     array.push (Math.floor(Math.random() * 100) + 0)
// }
// console.table (array)

// let max = array [0]

// for (i = 0; i < array.length; i++)
// if (array [i] > max) {
//     max = array [i]
// }
// console.log(`max = ${max}`)