// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

// const event = {
//     name: 'Birthday Party',
//     printGuestList:() =>{
//         console.log('Guest list for ' + this.name)
//     }
// } this cannot be called by arrow function

//ES6 method shorthand use consise function and still have acces to this 
//standard functions have there own this binding and we dont want that (one old way is to use that , const that = this and then thant.ame in for each function)
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Mike','Jen'],
    printGuestList (){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }//methods on objects
}

event.printGuestList()
//alternate functions using arrow, short hand syntax 
//arrow functions don't binde their own this value they access the this value in the context which they are created
// this makes them poor candidates for methods but good for everything else
