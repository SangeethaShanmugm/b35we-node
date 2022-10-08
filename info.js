const os = require("os");

console.log("Free memory", os.freemem() / 1024 / 1024 / 1024);
console.log("total memory", os.totalmem() / 1024 / 1024 / 1024) ;
console.log("OS version", os.version());
console.log("Processor", os.cpus());
//1kb  --> 1024bytes --> 1mb --> 1024 kb --> 1024mb --> 1gb --> 1024mb