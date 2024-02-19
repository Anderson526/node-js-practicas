const fs = require('fs').promises;

async function readfile() {
    try {
        const data1 = await fs.readFile("./text1.txt", "utf8");
        console.log("mensaje:", data1);
        
        const data2 = await fs.readFile("./text2.txt", "utf8");
        console.log("mensaje:", data2);
    } catch (error) {
        console.error("mensaje", error);
    }
}

readfile();
