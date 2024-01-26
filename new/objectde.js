const course = {
    course :"optopi",
    course_price: "32234",
    course_id: 1234
}
//destuctre
const {course_id : id} = course
console.log(id);

user_data = {
    "username": "kristinward",
    "sex": "F",
    "address": "122 Powell Trace Suite 016, Lloydport, SC 08075",
    "name": "Katherine Gill",
    "email": "jestrada@gmail.com",
    "birthday": "1958-04-05"
  }

const {username : name} = user_data
const {address : add} = user_data
console.log("hi  i am ",name,"my adress is ", add);