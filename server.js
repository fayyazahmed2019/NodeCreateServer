const http = require("http");
const port = 10000;

const server = http.createServer(()=>{

console.log("server is running", port)

})

server.listen(port);

// const companies = [

//     {
//         cname: "Google",
//         cyear: 2000,
//     },

//     {
//         cname: "Google",
//         cyear: 2000,
//     },

//     {
//         cname: "Facebook",
//         cyear: 2005,
//     },

// ]


// companies.forEach((company, index)=>{

//     if (company.cname === "Google"){
//         console.log(company)
//     }
   
// })