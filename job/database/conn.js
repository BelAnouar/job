import mongoose from "mongoose";



const connectMongo=async()=>{
    try{
            const {connection}=await mongoose.connect("mongodb+srv://Anwar:Anwar123@cluster0.636gzrj.mongodb.net/project")
            if(connection.readyState==1){
                return Promise.resolve(true)
            }
        } catch (error) {
            return Promise.reject(error)
        }
}

export default connectMongo
// mongodb+srv://Anwar:Anwar123@cluster0.636gzrj.mongodb.net/?retryWrites=true&w=majority