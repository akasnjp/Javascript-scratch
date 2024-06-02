let course = {
    coursename: "js chai",
    price: 999,
    courseInstructor: "hitesh"
};

//object method call
console.log(course.courseInstructor); //cant be useful for multiple times as it will take multiple lines

let {courseInstructor} = course;
console.log(courseInstructor); //here by just assigning it by like this we can call through only method too

//through arrow function react where inside the arrow function props would be present and to  denote that {} is used

// const navbar ({company}) => {

//}   ({}) props bydefault destructuring
//navbar(company= "hitesh");


//   API in earlier days it's in xml now it's in json
//API fetches url to get the desired information
//API can be reached in the form of objects or in arrays
