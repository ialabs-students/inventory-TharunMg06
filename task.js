const http = require('http');
const https = require('https');

const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json());


var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("No name is provided");
    }
    next();
};

http.createServer(app).listen(4004,()=>{
    console.log("Server is running");
});


const Employee=[{"Name":"Ajith","Age":50,"ID":"ajith15@gmail.com"},
{"Name":"Vijay","Age":49,"ID":"vijay67@gmail.com"},
{"Name":"Surya","Age":48,"ID":"surya42@gmail.com"}
];


app.get("/employee",(request,response)=>{
    response.send(Employee);
    });

app.get("/fetch/obj/",(request,response)=>{
    response.send(Employee);
    });


app.post("/add/obj",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Age":request.body.Age,
        "ID":request.body.ID
    }
    console.log(request.body);
    Employee.push(new_employee);
    response.send("Employee created");
    });

app.put("/put/obj",(request,response)=>{
    for(let emp of Employee){
        if(emp.Name==request.body.Name){
            emp.Name="Surya"
        }
    }
    response.send(Employee);
})

app.delete("/delete/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="Surya"){
            delete Employee[emp];
        }
    }
    response.send(Employee);
})

app.get("/find/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="Ajith"){
            response.send(Employee[emp]);
        }
    }
})
