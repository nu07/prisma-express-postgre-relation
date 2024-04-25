const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();
dotenv.config();
const PORT = process.env.PORT || 3033;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/user', async (req,res)=>{
    const user = req.body
    const result = await prisma.user.create({
        data:user
    })

    // reqnya
    // {
    //     "nama" : "Wisnu"
    // }
    res.send(result)
})

app.delete('/user/:id', async (req,res)=>{
    const id = req.params.id
    const result = await prisma.user.delete({
        where: {
            id:id
        }
    })

    res.send(result)

})


app.post('/post', async (req,res)=>{
    const post = req.body
    const result = await prisma.post.create({
        data:post
    })

    // req nya 
    // {
    //     "userid":"99dc93e3-721f-48dc-a9db-2f9d02a9b705",
    //     "title" : "test relasi",
    //     "text" : "test text"
    // }
    res.send(result)
})

app.put('/post', async (req,res)=>{
    const id = req.body.id
    const post = req.body
    delete post.id
    const result = await prisma.post.update({
        where: {
            id:id
        },
        data:post
    })

    // req nya 
    // {
    //     "userid":"99dc93e3-721f-48dc-a9db-2f9d02a9b705",
    //     "title" : "test relasi",
    //     "text" : "test text"
    // }
    res.send(result)
})


app.delete('/post/:id', async (req,res)=>{
    const id = req.params.id
    const result = await prisma.post.delete({
        where: {
            id:id
        }
    })

    res.send(result)

})



app.listen(PORT, () => {
    console.log("express run at port: ", PORT);
  });
  
