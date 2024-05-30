//basic express code
const express=require("express");
const { createTodo, updateTodo } = require("./types");
const app=express();
app.use(express.json());
app.get("/todo",function(req,res){
    res.json({
        todos:[]
    })
})
app.post("/todo",async function(req,res){
    const createpayload=req.body;
    const parsetodo=createTodo.safeParse(createpayload);
    if(!parsetodo.success){
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return ;
    }
    // put in mongodb
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})
app.put("/completed",async function(req,res){
    const updatepayload=req.body;
    const parsepayload=updateTodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return ;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
}
)
app.listen(3000);