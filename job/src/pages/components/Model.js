

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useReducer, useState } from "react"
import { useDispatch } from "react-redux"

import { useMutation, useQueryClient } from 'react-query';
import { getJob, getJobs, updateJob } from '../../../lib/helper';
import { UpdateAction } from '../../../redux/reducer';
import { toast } from 'react-toastify';


// const Model=()=>{
//     const statusOption=["Pending","Declined","Interview"]
//     const typeOption=["part time","full time"]
//     return(<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="false">
    
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
//     <div className="fixed inset-0 z-10 overflow-y-auto">
//     <section className='w-70 md:col-span-2 relative lg:h-[60vh] h-[15vh] m-3  p-7 border rounded-lg bg-white '>

// <form className="grid lg:grid-cols-3 w-6/7 gap-5 " >
// <div className="input-type">
// <label className="block text-gray-700 text-md font-bold mb-2" for="position">
//         Position
//       </label>
//     <input type="text"    id="position" name="position" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Position" />
// </div>
// <div className="input-type">
// <label className="block text-gray-700 text-md font-bold mb-2" for="company">
//         Company
//       </label>
//     <input type="text"  id="company"  name="company" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Company" />
// </div>
// <div className="input-type">
// <label className="block text-gray-700 text-md font-bold mb-2" for="location">
//         Job Location
//       </label>
//     <input type="text"   id="location" name="location" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Job Location" />
// </div>
// <div className="input-type">
// <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="status">
//         Status
//       </label>
//       <div className="relative">
//         <select name='status'  className="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="status">
//         {statusOption.map((item,index)=>{
//             return(<option key={index} value={item}>{item}</option>);
//         })}
          
          
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
// </div>


// <div className="input-type">
// <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="type">
//         type Job
//       </label>
//       <div className="relative">
//         <select name='type'  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type">
//         {typeOption.map((item,index)=>{
//             return(<option key={index} value={item}>{item}</option>);
//         })}
          
        
          
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
// </div>


// <div>

// <button type="submit" className="flex justify-center text-md w-2/6 py-2 mt-[2.5rem] bg-green-500 text-white  border rounded-md hover:text-black hover:bg-gray-50 hover:border-green-500 ">
//  Add <span className="px-1"><AddCircleOutlineIcon/> </span>
// </button></div>

// </form></section>
//     </div>
//   </div>)
// }

// export default Model

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}


const Model=(props)=>{

  const statusOption=["Pending","Declined","Interview"]
   const typeOption=["part time","full time"]
   const {isLoading, isError, data, error} = props.data;
   
const [formData,setFormData]=useReducer(formReducer,{})
  const dispatch=useDispatch()

  const queryClient=useQueryClient()
 
  const UpdateMutation=useMutation((newData)=>updateJob(data._id,newData),{
    onSuccess:async(data)=>{
      queryClient.prefetchQuery("Job",getJobs)
    }
  })

  if(isLoading) return <div>Loading...!</div>
  if(isError) return <div>Error</div>

  const {
		
		position,
	company,
		location,
		status,
		type
	}= data;
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    let update=Object.assign({},data,formData)
    await UpdateMutation.mutate(update)
    dispatch(UpdateAction(null))
    if(update)return toast("Update is seccess",{hideProgressBar:true,autoClose:4000,type:"success",position:"top-center"})
    
  }
    return(
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     

       <section className='w-70 md:col-span-2 relative lg:h-[60vh] h-[15vh] m-3  p-7 border rounded-lg bg-white '>
 <h2 className='mb-4  inline-block'>Update Job</h2>
 <form className="grid lg:grid-cols-3 w-6/7 gap-5 "  >
 <div className="input-type">
 <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="position">
         Position
       </label>
     <input type="text" onChange={setFormData}  defaultValue={position}   id="position" name="position" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Position" />
 </div>
 <div className="input-type">
 <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="company">
         Company
       </label>
     <input type="text" onChange={setFormData}  defaultValue={company}  id="company"  name="company" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Company" />
 </div>
 <div className="input-type">
 <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="location">
         Job Location
       </label>
     <input type="text" onChange={setFormData}  defaultValue={location}  id="location" name="location" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Job Location" />
 </div>
 <div className="input-type">
 <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" htmlFor="status">
         Status
       </label>
       <div className="relative">
         <select name='status' onChange={setFormData}  defaultValue={status}  className="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="status">
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
<label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="type">
        type Job
      </label>
      <div className="relative">
        <select name='type' onChange={setFormData}  defaultValue={type}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type">
        {typeOption.map((item,index)=>{
            return(<option key={index} value={item}>{item}</option>);
        })}
          
        
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
</div>


<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
          <button type="button" onClick={handleSubmit} className="mt-3 inline-flex w-full justify-center rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-yellow-50 sm:mt-0 sm:w-auto">Update</button>
          <button onClick={()=>dispatch(UpdateAction(null))} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>

</form></section>
    </div>
  </div>
</div>

    )
}
export default Model