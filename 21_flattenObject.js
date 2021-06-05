// input
var user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};

/* //output
  {
    userName: "Vishal",
    userAddressPrimaryHouse: "109",
    userAddressPrimaryStreetMain: "21",
    userAddressPrimaryStreetCross: "32",
  }

  */

const capitalizeStr = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

const flattenObject = (nestedObj, keyName) => {
    let flattenedObj = {};

    const traverseObject = (object, keyName) => {
        for (let key in object) {
            let uniqueKey = `${keyName}${capitalizeStr(key)}`;
            if (typeof object[key] === "object" && object[key] !== null) {
                traverseObject(object[key], uniqueKey);
            } else {
                flattenedObj[uniqueKey] = object[key];
            }
        }
    };

    traverseObject(nestedObj, keyName);
    return flattenedObj;
};

console.log(flattenObject(user, "user"));
