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
// let car2=new car("hundai",180)
// console.log(car1.drive(),car2.drive())

//Question 6: crate  a student class whose constructor accepts name and roll number
//add a method introduce that prints both values

// class student{
//     constructor(name,rollnumber){
//         this.name=name;
//         this.rollnumber=rollnumber;
//     }
//     introduce(){
//         return this.name +"--"+ this.rollnumber;
//     }
// }
// let str1=new student("ejaz",1)

// console.log(str1.introduce())



// Advnaced JavaScript CallBack Questions

//Question 1: ek function batoo afterDelay
//requiremnt:
//ye function 2 cheeze lega
//time(milliseconds)
//callback function
//givn time ke baad callback call kare


// function afterDelay(time,cb){
//     setTimeout(function(){
// cb()
//     },time)
// }

// afterDelay(3000,function(){
//     console.log("callback executed")
// })


//Question 2:

// function getUser(username,cb){
//     console.log("getting user details.....")
//     setTimeout(function(){
// cb({id:1,username:"ejaz ahmad"})
//     },1000)
// }
// function getUserposts(id,cb){
//     console.log("getting user posta.....")
//     setTimeout(function(){
// cb(["hello","good dday","fuck you"])
//     },2000)
// }

// getUser("ejaz",function(data){
//     getUserposts(data.id,function(allposts){
//  console.log(data.username,allposts)
//     })
   
// })

//Question 3:

function instagramSeDataLaoo(username,cb){
    console.log("getting instagram details.....")
    setTimeout(function(){
cb({uniqueId:748,username:"ejaz ahmad"})
    },2000)
}

instagramSeDataLaoo("ejaz ahmad",function(data){
   
 console.log(data)
   
   
})