const { Schema, models, model } = require("mongoose");






const userSchema=new Schema({
    username:String,
      email:String,
      password:String
})

const Users=models.users || model("users",userSchema)

export default Users