const { Schema, models, model } = require("mongoose");

const jobSchema = new Schema({
  position: String,
  company: String,
  location: String,
  status: String,
  type: String
},{timestamps:true});


const Jobs= models.Jobs || model('Jobs',jobSchema)

export default Jobs