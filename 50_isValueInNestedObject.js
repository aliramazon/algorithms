// let found = false;
// const isValueInNestedObject = (nestedObject, value) => {
//     if (typeof nestedObject === "object") {
//         for (let key in nestedObject) {
//             if (nestedObject[key] === value) {
//                 return true;
//             } else if (typeof nestedObject === "object") {
//                 found = isValueInNestedObject(nestedObject[key], value);
//             }
//         }
//     }

//     return found;
// };

const isValueInNestedObject = (nestedObject, value) => {
    let found = false;

    let traverseObj = (nestedObject) => {
        if (typeof nestedObject === "object") {
            for (let key in nestedObject) {
                if (nestedObject[key] === value) {
                    found = true;
                    return;
                } else {
                    traverseObj(nestedObject[key], value);
                }
            }
        }
    };
    traverseObj(nestedObject);
    return found;
};

let nested = {
    a: {
        b: {
            c: "d",
            d: {
                j: {
                    k: "a"
                },
                l: {
                    q: "o"
                }
            }
        },
        e: {
            f: {
                z: "o"
            },
            l: {
                k: {
                    w: {
                        p: "aws",
                        z: {
                            n: {
                                m: "l"
                            }
                        }
                    },
                    z: {
                        q: {
                            m: "k"
                        },
                        h: {
                            v: {
                                u: "p"
                            }
                        }
                    }
                }
            }
        }
    }
};

console.log(isValueInNestedObject(nested, "d"));
console.log(isValueInNestedObject(nested, "k"));
console.log(isValueInNestedObject(nested, "aws"));
console.log(isValueInNestedObject(nested, "o"));
console.log(isValueInNestedObject(nested, "b"));
