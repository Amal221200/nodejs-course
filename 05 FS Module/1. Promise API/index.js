import fs from "fs/promises";
process.chdir(import.meta.dirname);

try {
    // await fs.mkdir("./Demo"); // Create a Directory
    // await fs.mkdir("./Demo/hello", { recursive: true }); // Create a Directory aong with the other directories in the path string if not exists
    // const _files = await fs.readdir("./Demo"); // Reads the directory and returns an array of directories and files available in the directory
    // await fs.rmdir("./Demo") // Deletes the directory

    // await fs.writeFile("README.md", "Hello There!") // Creates a file if not exists and will replaces the content inside the file by the content provided in the second argument
    // const data = await fs.readFile("README.md", { encoding: "utf-8" }) // Reads the content in the file and return an array buffer which can be changed by providing a valid value to encoding inside an object in the second argument.
    // console.log(data);
    // await fs.appendFile("README.md", "Hello README!") // Creates a file if not exists and add the content provided in the second argument to the existing content.
    const stats = await fs.stat("info.txt") // Gives information/meta-data about a file/folder
    
    // const file = await fs.open("./Demo/Hello.txt", 'r') // OPens a file 

} catch (error) {
    console.log(error);
}