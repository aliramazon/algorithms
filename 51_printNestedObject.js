const printValues = (nestedObject) => {
    if (typeof nestedObject === "object") {
        for (let key in nestedObject) {
            if (typeof nestedObject[key] === "string") {
                console.log(nestedObject[key]);
            } else {
                printValues(nestedObject[key]);
            }
        }
    }
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

printValues(nested);
