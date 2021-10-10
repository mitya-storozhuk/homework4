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
