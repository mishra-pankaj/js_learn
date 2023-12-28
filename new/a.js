const account_id = 12234
let account_email = "op@gmail.com"
var account_password = "123"
account_city = "uganda"

//mostly we use let in js var dont have scope 
// const is permanent we cant change the value of const
// to display output in tablwe we use const.table([])

/* prefer to use let dont use var due to issue in block AND FUNCTION scope  */ 
console.table([account_id,account_email,account_password,account_city]);