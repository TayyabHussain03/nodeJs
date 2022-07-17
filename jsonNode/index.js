let fs = require('fs')
let obj = {
    name: "tayyab",
    age: "19",
    qualification: "bachelors"
}

let infoJSON = JSON.stringify(obj)

fs.writeFile("info.json", infoJSON, (error) => {
    console.log(error)
})

fs.readFile("info.json", "utf8", (error, data) => {
    const info = JSON.parse(data)
    console.log(info)
})
