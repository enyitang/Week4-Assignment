//console.log(45+2)


//const g = "Enyitang Joseph"
//const msg = `i am ${g}, today is Saturday`
//console.log(msg)

//Express is use to set up server
//it is a node js framework.npm&yarn

const express = require("express")
const app = express()

const PORT = 8000

app.listen(PORT,()=>{
console.log("Server started runing...")    

})

app.get("/string", (request,Response)=>{
    Response.json({message: "My Name is Enyitang Joseph"})
})

app.get("/object", (request,Response)=>{
    Response.json({DOB: "26 November", year:1993, ocupation: "Student" })
})

app.get("/Array", (request,Response)=>{
    Response.json({Department: "Computer Science", Falculty: "Natural Applied Science" })
})


