const myOriginalLibrary = (a, b) => {
    return console.log("a * b = " + (a * b));
};

myOriginalLibrary(10, 2);

module.exports = myOriginalLibrary;
