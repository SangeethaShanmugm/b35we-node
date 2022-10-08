const double = (num) => num * 2;

// console.log(process.argv, process.argv[2]);

const [, , n ] = process.argv;
console.log(double(n));