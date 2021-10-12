// task1
const height = +prompt ("Введіть висоту прямокутника", "3");
const width = +prompt ("Введіть ширину прямокутника", "4");
function calcRectangleArea (height, width) {
    if (isNaN(height) || isNaN(width)) {
        throw new Error ("data is not a number");
    };
    let result = height * width;
    return console.log(result);
};
try {
    calcRectangleArea (height, width);
} catch (exception) {
    console.log(exception.stack);
};

// task2
const age = +prompt ("Введіть свій вік", "18");
function checkAge(age) {
    if (age === 0) {
        throw new Error ("The field is empty! Please enter your age");
    } else if (isNaN(age) || (age < 0)) {
        throw new Error ("You enter inccorect data"); 
    } else if (age < 14) {
        console.log("You cann't watch a movie");
    } else console.log("You can watch a movie");
};

try {
    checkAge(age);
} catch (exception) {
    console.error(exception.stack);
};

// task3
class MonthException {
    constructor(message) {
      this.name = message;
    };
};

const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function showMonthName (month) {
    if ((month <= 0) || (month >= 13)) throw new Error ("Incorrect month number");
    return console.log(monthes[month - 1]);
};

showMonthName(5);

// task4
let obj = {};
function showUser(id) {
    if (id < 0) {
        throw new Error ("You enter inccorect data"); 
    };
    return obj.id = id;
};
console.log(showUser(5));

function showUsers(ids) {
    let result = [];
    for (let i = 0; i < ids.length; i++) {
        let object = {};
        try {
            if (ids[i] < 0 ) {
                throw new Error ("ID must not be negative: " + ids[i]);
            } else 
            object.id = ids[i];
            result.push(object);
        } catch (error) {
            console.log(error);
        };
    };
    return console.log(result);   
};

showUsers([7, 44, -1, 22]);
