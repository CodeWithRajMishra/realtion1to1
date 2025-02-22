const AuthorModel= require("../models/authorModel");
const BookModel= require("../models/bookModel");

const dataSave=async(req, res)=>{
const { name, email, city }= req.body;

const Author = await AuthorModel.create({
    name:name,
    email:email,
    city:city,
})
res.status(200).send("Author succesfully created!!!");

}
 


const showAuthordata=async(req, res)=>{
     const Author = await AuthorModel.find();
     res.status(200).send(Author);
}

const addnewBook=async(req, res)=>{
 const { id, bookname, price } = req.body;

 const Book = await BookModel.create({
    bookname:bookname,
    bookprice:price,
    authorid:id
 })

 await AuthorModel.findByIdAndUpdate(id, { $push: { bookid: Book._id } });

 res.send("OKK")
}

const displayAllData=async(req, res)=>{
    const AuthorData= await AuthorModel.find().populate("bookid");
    res.status(200).send(AuthorData);
}


module.exports ={
    dataSave,
    showAuthordata,
    addnewBook,
    displayAllData
}