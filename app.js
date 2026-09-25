const express= require("express");
const database=require("better-sqlite3");
const db=new database("product.db");
db.exec(`CREATE TABLE IF NOT EXISTS PRODUCTS
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL)
`);
const app=express();

app.use(express.json());


app.post("/products",(req,res)=>{
    if(!req.body.name || req.body.name.trim()===""){
        return res.status(400).json({
            message:"product name is required"
        });
    }
    if(req.body.price===undefined || typeof req.body.price!=="number"){
        return res.status(400).json({
            message:"product price must be a number"
        });
    }
    if(req.body.price<0){
        return res.status(400).json({
            message:"product price cannot be negative"
        });
    }
    const stmt=db.prepare("INSERT INTO PRODUCTS(name,price)VALUES(?,?)");
    const result=stmt.run(req.body.name,req.body.price);
    res.status(201).json({
        message:"product created successfully",
        id:result.lastInsertRowid
    });
});

app.get("/products",(req,res)=>{
    const products=db.prepare("SELECT * FROM PRODUCTS").all();
    res.json(products);
});

app.get("/products/:id",(req,res)=>{
    const product=db.prepare(
        "SELECT * FROM PRODUCTS WHERE id=?"
    ).get(req.params.id);
    if(!product){
        return res.status(404).json({
            message:"product Not Found"
        });
    }
    res.json(product);
});

app.put("/products/:id",(req,res)=>{
     if(!req.body.name || req.body.name.trim()===""){
        return res.status(400).json({
            message:"product name is required"
        });
    }
    if(req.body.price===undefined || typeof req.body.price!=="number"){
        return res.status(400).json({
            message:"product price must be a number"
        });
    }
    if(req.body.price<0){
        return res.status(400).json({
            message:"product price cannot be negative"
        });
    }
    const stmt=db.prepare(
        "UPDATE PRODUCTS SET name=?,price=? WHERE id=?"
    );
    const result=stmt.run(
        req.body.name,
        req.body.price,
        req.params.id
        );
        if(result.changes===0){
            return res.status(404).json({
                message:"product not found"
            });
        }
        res.json({
            message:"product updated successfully"

        })
});

app.delete("/products/:id",(req,res)=>{
    
    
    const stmt=db.prepare(
        "DELETE FROM PRODUCTS WHERE id=?"
    );
    const result=stmt.run(req.params.id);
    if(result.changes===0){
        return res.status(404).json({
            message:"product not found"
        });
    }
    res.json({
        message:"product deleted successfully"
    })

});
app.listen(3000,()=>{
    console.log("server is running")
});
