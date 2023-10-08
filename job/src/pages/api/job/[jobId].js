






import { deleteJob, getJob, getJobs, postJob, putJob } from "../../../../controllers/controller";
import connectMongo from "../../../../database/conn";








export default async function handler(req,res){
    connectMongo().catch(()=>res.status(405).json({error:"error connection to data"}))

    const {method}=req

    switch(method){
        case "GET":
            getJob(req,res)
            break;
        case "PUT":
            putJob(req,res)
            break;
        case "DELETE":
            deleteJob(req,res)
            break;
        default:
                res.setHeader('Allow',["GET","PUT","DELETE"])
                res.status(405).end(`Method ${method} not Allow`)
            break;
    }

}