const add = (n1, n2) => n1 + n2;

// console.log(process.argv)

const [, , n1, n2] = process.argv;

console.log(add(+n1, +n2))