const obj1 = {
    field1: 222,
    field2: "Byron",
    field3: true
}

const obj2 = {
    field1: "Casas",
    field2: [2,3,4,6,7]
}



//SPREAD OPERATOR
const {field1, field2} = obj1
console.log(field1, field2);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


//REST
const obj4 = {
    field111: 222,
    field222: "Byron",
    field333: true,
    field444: "Byron",
    field666: 666
}

const {field111, ...rest} = obj4
console.log(field111);
console.log(rest);