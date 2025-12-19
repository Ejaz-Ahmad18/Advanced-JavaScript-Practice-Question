// Section 1: Objects and oops thinking ( Foundation )

//Question 1: Create a user object that stores name and email and has a login method which prints "user logged in"
// let user={
 
//     name:"ejaz",
//     email:"ejazahmadbh18@gmail.com",
//     login:function(){
//         console.log("logged in")
//     }

// }
// user.login()

//Question 2: //imagine you now have 5 user
//first,think how youu would manage them withouut usinnnng a class
//thhhennn connnvert the same logic usimmmmmmg a class annnnnnd observe how thhhe code becomes cleaer. write code for bothh approaces.

// class User{
//     constructor(name,mail){
// this.name=name;
// this.mail=mail;
//  }
//     loggend(){
//         console.log("loggend in")
//     }
// }

// let User1=new User("ejaz","ejazahmad@gmail.com")
// let User2=new User("ejaz","ejazahmad@gmail.com")

// console.log(User1,User2)

//Question 3:  crate a product that storees and prices and has a method which return the final price after discount.

// let product={
//     cloths:"jeans",
//     price:3500,
//     function(){
//       return  this.price -200
//     }
// }
// console.log(product.function())

// let product={
//     cloths:"jeans",
//     price:3500,
//   discountprice:  function(){
//       return  this.price -200
//     }
// }
// console.log(product.discountprice())

//Question 4: create a car class with the following
//brnad
//speed
//a drive two method that prints the car brnad and speed

// class car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         return this.brand +"--"+ this.speed;
//     }
// }
// let car1=new car("maruti",160)
// console.log(car1.drive())

//Question 5: crate two differnt car objects from the same class and verify that their data is differeneet

class car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    drive(){
        return this.brand +"--"+ this.speed;
    }
}
let car1=new car("maruti",160)
let car2=new car("hundai",180)
console.log(car1.drive(),car2.drive())