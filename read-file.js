import fs from "fs"

fs.writeFileSync("welcome.txt", "Hello Node", (err,data) => {
    if (err) {
        console.log(err);
    }
})

fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        
    }

    else{

        console.log(data);
    }
    
})