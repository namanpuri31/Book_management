const express = require("express")
const modal = require("./modal.js")
const app = express()
app.use(express.json())

app.post("/book/createBook", async (req, res) => {
    const body = req.body;
    const createdBook = await modal.create({
        title: body.title,
        author: body.author,
        summary: body.summary,
    })
    if(createdBook){
        return res.status(200).send("book created!");
    }
    return res.status(500).send("Oops something went wrong..!");
})

app.get("/book/getAllBooks", async (req, res) => {
    const allBooks = await modal.find()
    if(allBooks){
        return res.status(200).send(allBooks);
    }
    return res.status(500).send("Oops something went wrong..!");
})

app.put("/book/updateBook/:id", async (req, res) => {
    const updatedBook = await modal.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if(updatedBook){
        return res.status(201).send('The Book has been updated');
    }
    return res.status(500).send("No such book found.")
})

app.get("/book/getBook/:id", async (req, res) => {
    const book = await modal.findById(req.params.id);
    if(book){
        return res.status(200).send(book);
    }
    return res.status(500).send("No such book found.")
})

app.delete("/book/removeBook/:id", async (req, res) => {
    const book = await modal.findByIdAndDelete(req.params.id);
    if(book){
        return res.status(200).send("Book deleted successfully.");
    }
    return res.status(500).send("No such book found.")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
