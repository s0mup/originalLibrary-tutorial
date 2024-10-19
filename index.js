const myOriginalLibrary = (a, b) => {
    return console.log(a + b);
};

myOriginalLibrary(1, 2);

module.exports = myOriginalLibrary;
