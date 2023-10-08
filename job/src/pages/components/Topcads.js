import WorkIcon from '@mui/icons-material/Work';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import { useQuery } from 'react-query';
import { getJobs } from '../../../lib/helper';


export default function Topcards(){
    const defaultStats = { Pending: 0, Interview: 0, Declined: 0 };
    const { isLoading, isError, data, error } = useQuery("job", getJobs);
  if (isLoading) return (<><div>data is Loading</div></>);
  if (isError) return <div>Got Error{error}</div>;
  console.log(data);
  const statusCounts = data.reduce((counts, job) => {
    const status = job.status;
    if (status === 'Pending' || status === 'Interview' || status === 'Declined') {
      counts[status] = counts[status] ? counts[status] + 1 : 1;
    }
    return counts;
  }, defaultStats);

  console.log(statusCounts);
  
    return(   <div className='grid lg:grid-cols-6 gap-3 px-4'>
    <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
    <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{statusCounts.Pending}</p>
                <p className='text-gray-600'>Pending Aplications</p>
            </div>
            <p className='bg-orange-200 flex justify-center items-center p-4 rounded-lg'>
                <span className='text-orange-400 text-lg'><WorkIcon fontSize='large'/></span>
            </p>
    </div>
    <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
    <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{statusCounts.Interview}</p>
                <p className='text-gray-600'>Interviews Scheduled</p>
            </div>
            <p className='bg-purple-200 flex justify-center items-center p-4 rounded-lg'>
                <span className='text-purple-700 text-lg'><PermContactCalendarIcon fontSize='large'/></span>
            </p>
    </div>
    <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
    <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{statusCounts.Declined}</p>
                <p className='text-gray-600'>Jobs Declined</p>
            </div>
            <p className='bg-rose-200 flex justify-center items-center p-4 rounded-lg'>
                <span className='text-rose-700 text-lg'><LayersClearIcon fontSize='large'/></span>
            </p>
    </div>
    </div>)
}