import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://aakankshskallihal:Legend1207@cluster0.7e7s1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


