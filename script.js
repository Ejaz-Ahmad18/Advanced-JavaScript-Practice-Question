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

class User{
    constructor(name,mail){
this.name=name;
this.mail=mail;
 }
    loggend(){
        console.log("loggend in")
    }
}

let User1=new User("ejaz","ejazahmad@gmail.com")
let User2=new User("ejaz","ejazahmad@gmail.com")

console.log(User1,User2)
