


import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useReducer, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addJob, getJobs } from '../../../lib/helper';
import { toast } from 'react-toastify';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export default function FromProfile() {

 


    

  
    return(
        <section className='w-70 md:col-span-2 relative lg:h-[50vh] h-[15vh] m-3  p-7 border rounded-lg bg-white '>
 <h2 className='h-2 font-bold mb-[3rem]'>Profile</h2>
<form className="grid lg:grid-cols-3 w-6/7 gap-5 " >
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="Username">
        Username
      </label>
    <input type="text"    id="Username" name="position" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="Username" />
</div>
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="fullname">
        full Name
      </label>
    <input type="text"  id="fullname"  name="fullname" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="full Name" />
</div>
<div className="input-type">
<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
        Email
      </label>
    <input type="text"   id="email" name="email" className="border w-full px-4 py-3 focus:outline-none rounded-md" placeholder="email" />
</div>






<div>

<button type="submit" className="flex justify-center text-md w-3/6 py-2  bg-blue-500 text-white  border rounded-md hover:text-black hover:bg-gray-50 hover:border-blue-500 ">
 Save Changes <span className="px-1"><PublishedWithChangesIcon/> </span>
</button></div>

</form></section>
    );
}
