
const BASE_URL = "http://localhost:8080/"
// all user
export const getJobs = async () => {
    const response = await fetch(`${BASE_URL}api/job`)
    const json = await response.json()

    return json;
}

// single user
export const getJob = async (jobId) => {
    const response = await fetch(`${BASE_URL}api/job/${jobId}`);
    const json = await response.json()

    if(json) return json;
    
}

// posting a new user
export async function addJob(formData){
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}api/job`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}


// Update a new user
export async function updateJob(jobId, formData){
    console.log(formData);
    console.log(jobId);
    const Options = {
        method : 'PUT',
        headers : { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/job`, Options)
    const json = await response.json()
    return json;
}


// Delete a new user
export async function deleteJob(jobId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`${BASE_URL}api/job/${jobId}`, Options)
    const json = await response.json()
    return json;
}


