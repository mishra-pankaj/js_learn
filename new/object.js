//singleton
//object literals
const mysym = Symbol("key1")
const user={
    "first_name":"aren",
    ["mysym"]:"key1d",
    "last_name":18,
     location:"uk",
     email:"op@gp",
     is_logedin:true
}
// console.log(user.email);
// console.log(user["first_name"])
// console.log(typeof(user[mysym]));

user.email = "aren@chat.com"
Object.freeze(user)
user.first_name="pappu"
console.log(user);

