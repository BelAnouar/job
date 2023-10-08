import Link from "next/link"

const { default: Headers } = require("@/pages/components/header")
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

import QueryStatsIcon from '@mui/icons-material/QueryStats';

import WorkspacesIcon from '@mui/icons-material/Workspaces';
const format=({children})=>{
    return(

        <div className="flex">
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
       <div className="flex flex-col items-center">
          <Link href={"/"} >
          <div className='bg-purple-800  p-3 rounded-lg inline-block'>
                    <WorkspacesIcon fontSize="large"/>
                </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-3'></span>
          <Link href={"/"}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-dark my-2 p-3 rounded-lg inline-block">
                <DashboardCustomizeIcon />
            </div>
          </Link>
          <Link href={"/orders"}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-dark my-2 p-3 rounded-lg inline-block">
                <QueryStatsIcon/> 
            </div>
          </Link>
          <Link href={"/addjob"}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-dark  my-2 p-3 rounded-lg inline-block">
                <PersonIcon/>
            </div>
          </Link>
          <Link href={"/profile"}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-dark my-2 p-3 rounded-lg inline-block">
                <SettingsIcon/>
            </div>
          </Link>
       </div>
        </div>
        <main className='ml-20 w-full'> {children}</main>
       </div>
        

          
        
    )
}

export default format