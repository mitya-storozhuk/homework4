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
