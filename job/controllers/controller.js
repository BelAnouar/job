import Jobs from "../model/jobschema";






export  async function getJobs(req,res){
    try {
        const jobs=await Jobs.find({})
        if(!jobs) return res.status(404).json({error:"Data Not Found"})
       res.status(200).json(jobs)
    } catch (error) {
        res.status(404).json({error:"Error while Fetching Data"})
    }
}



export  async function getJob(req,res){
    try{
        const {jobId}=req.query
        if(jobId){
        const job= await Jobs.findById(jobId)
         res.status(200).json(job)
    }
    res.status(404).json({ error : "Job not Selected...!"});


    }catch(error){
        res.status(404).json({error:"cannot get the job ...!"})
    }
}

export  async function postJob(req,res){
    try{
           const formData=req.body;
           if(!formData)return res.status(404).json({error:"Form Data Not Provided...!"})
           Jobs.create(formData).then(reslt=>{
            return res.status(200).json(reslt)
           })
    }catch(error){
        return res.status(404).json({ error })
    }
}

export  async function putJob(req,res){
    try {
        const {jobId}=req.query;
        const formData=req.body;
        if(jobId && formData){
           const job= await Jobs.findOneAndUpdate(jobId,formData,{new:true});

          return res.status(200).json(job)
        }
    } catch (error) {
        res.status(404).json({error: "Error While Updating the Data...!"})
    }
    
}



export  async function deleteJob(req,res){
   try {
    const {jobId}=req.query;
    if(jobId){
        const job=await Jobs.findByIdAndDelete(jobId);
        return res.status(404).json(job)
    }
    res.status(404).json({ error: "User Not Selected...!"})

} catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!"})
}
}