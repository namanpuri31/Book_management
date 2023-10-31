# Book Management RESTfulAPI

This project is created to manage books efficiently using the technologies like NODE.JS and MONGODB this project can do all the CRUD operations based on the API request and can avoid errors if the favourable condition meets.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install express and mongoose.

```bash
npm install express 
npm install mongoose
npm install nodemon
```

## Usage

```python
# import modules
const express = require("express")
const mongoose = require("mongoose")

# use instance of express for creating different end points for CRUD operations
const app= express()

# connect to database using mongoose library for performing operation (CRUD)
mongoose.connect("http://localhost/27017/<your database_name>")

# make your instance listen on your localhost
app.listen(3000,()=>{
  console.log("listening on the port 3000")
})
```

## Use nodemon (npm install nodemon)

use nodemon module for making your backend server auto restart.
Please make sure to update tests as appropriate.

## start server locally

type the below command in the terminal
```bash
>> nodemon index.js
```
after this command is entered into the terminal the nodejs will run at the local server 3000 port

## End-points
-> /book is the common endpoint which further divides into different endpoints depending on the request\

-> /book/createBook, this end-point will create new books using properties like title, author and summary.\

-> /book/getAllBooks, this end-point will return all the books present in the database including book id, author, title and summary.\

-> /book/updateBook/:id, this end-point will update the existing book in the database using book's id and if the book isn't present the it will give 500 as status and gives message regarding status.\

-> /book/getBook/:id, this end-point will get the book using the book id and if there is no book existing it will give status as 500 and gives a message regarding server status.\

-> /book/removeBook/:id, this end-point will get the book using the book id and deletes it from the database and if there is no such book existing it will give status as 500 and gives a message regarding server status.


## Decisions made by me

I made decisions regarding how to design end-points and using proper http methods like PUT,POST,DELETE,GET. I even made a decision regarding deleting a book from database, I decided to get the book using unique ID of the book and delete it, and I assumed that the data that the endpoints will receive from frontend(body) will be in the JSON format.
