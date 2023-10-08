import { createSlice } from "@reduxjs/toolkit";




const initialState={idJob:null,visible:false}


export const JobReducer=createSlice({
    name:"job_App",
    initialState,
    reducers:{
        UpdateAction:(state,{payload})=>{
          state.idJob=payload
          
          
        }
    }

}
)

export const {UpdateAction}=JobReducer.actions;

export default JobReducer.reducer;