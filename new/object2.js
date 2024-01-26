const user = {}
user.id = "12sd34wer"
user.name ="sam sulek"
user.isloggedin = false
// console.log(user);

const obj1 = {
    id : "12sd12"
}
const obj12= {
    idsf : "12sdfdbd12"
}
const obj3 = {...obj1,...obj12}
console.log(obj3)