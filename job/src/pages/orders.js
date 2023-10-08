
import { useSelector } from 'react-redux';
import Format from '../../layout/format'
import Model from './components/Model';
import CardJob from './components/cardJob';
import Headers from './components/header'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getJob } from '../../lib/helper';
import { getSession } from 'next-auth/react';



export default function orders(){
    const {idJob}=useSelector((state)=>state.app)
    console.log(idJob);
    const FetcherData=useQuery(["job",idJob],()=>getJob(idJob))
   
    return(
             <Format>

                 <Headers/>
                <CardJob/> 
              {idJob&& <Model data={FetcherData}/>}
             </Format>
    );
}



export async function getServerSideProps({req}){
    const session=await getSession({req})
    if (!session) {
      return{
        redirect:{
          destination:"/login",
          permanent:false
        }
      }
    }
    return{
      props:{session}
    }
  }