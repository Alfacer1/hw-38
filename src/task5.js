
export const myMul = (a, b) => {
    return a * b;
}

export const myDouble = (n) => {
    const myBind = myMul.bind(null, 2);
    return myBind(n);
}

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

export const myTriple = (n) => {
    const myBind = myMul.bind(null, 3);
    return myBind(n);
}

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15