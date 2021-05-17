const reverseString = (string) => {
    let reversed = "";

    for (let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed;
    }

    return reversed;
};

console.log(reverseString("helloworld"));
