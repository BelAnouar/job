


import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useReducer, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addJob, getJobs } from '../../../lib/helper';
import { toast } from 'react-toastify';

const formReducer = (state, event) => {
        return {
            ...state,
            [event.target.name]: event.target.value
        }
      }
export default function AddjobForm() {
    const [formData, setFormData] = useReducer(formReducer, {})
    const statusOption=["Pending","Declined","Interview"]
    const typeOption=["part time","full time"]
 


    const queryclient=useQueryClient()
    const addMutation=useMutation(addJob,{
        onSuccess:()=>{
            queryclient.prefetchQuery("job",getJobs)
        }
    })
    

    function handleSubmit(e){
     e.preventDefault()
     if (Object.keys(formData).length === 0) {
        toast("Please fill out All fields", { hideProgressBar: true, autoClose: 4000, type: 'error' ,position:'top-center' })

        return;
     }
     let {position,company,location,status,type}=formData
     const model = {position,company,location,status,type}
     addMutation.mutate(model)
    }
    if(addMutation.isLoading) return <div>Loading!</div>
    if(addMutation.isError) toast(addMutation.error.message,{hideProgressBar:true,autoClose:4000,type:"warning",position:"top-center"});
    if(addMutation.isSuccess) toast("Insert is seccess",{hideProgressBar:true,autoClose:4000,type:"success",position:"top-center"})
    return(
        <section className='w-70 md:col-span-2 relative lg:h-[60vh] h-[15vh] m-3  p-7 border rounded-lg bg-white '>

<form className="grid lg:grid-cols-3 w-6/7 gap-5 " onSubmit={handleSubmit}>
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="position">
        Position
      </label>
    <input type="text" onChange={setFormData}   id="position" name="position" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Position" />
</div>
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="company">
        Company
      </label>
    <input type="text" onChange={setFormData} id="company"  name="company" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Company" />
</div>
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="location">
        Job Location
      </label>
    <input type="text" onChange={setFormData}  id="location" name="location" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Job Location" />
</div>
<div className="input-type">
<label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" htmlFor="status">
        Status
      </label>
      <div className="relative">
        <select name='status' onChange={setFormData}  className="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="status">
        {statusOption.map((item,index)=>{
            return(<option key={index} value={item}>{item}</option>);
        })}
          
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
</div>


<div className="input-type">
<label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" htmlFor="type">
        type Job
      </label>
      <div className="relative">
        <select name='type' onChange={setFormData} defaultValue={"part time"} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type">
        {typeOption.map((item,index)=>{
            return(<option key={index} value={item}>{item}</option>);
        })}
          
        
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
</div>


<div>

<button type="submit" className="flex justify-center text-md w-2/6 py-2 mt-[2.5rem] bg-green-500 text-white  border rounded-md hover:text-black hover:bg-gray-50 hover:border-green-500 ">
 Add <span className="px-1"><AddCircleOutlineIcon/> </span>
</button></div>

</form></section>
    );
}
