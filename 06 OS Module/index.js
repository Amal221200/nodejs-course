import os from "os";

console.log(os.platform()); // Returns the platform on which nodejs is running
console.log(os.arch()); // OS architectur
console.log(os.hostname()); // Hostname or the username of the machine
console.log(os.homedir()); // User directory of the machine
console.log(os.networkInterfaces()); // Information about all the networks connected to the machhine
console.log(os.freemem()); // Amount of memory left in the RAM
console.log(os.totalmem()); // Total memory left in the RAM