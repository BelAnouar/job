const { default: Link } = require("next/link")

import WorkspacesIcon from '@mui/icons-material/Workspaces';




const Sidbar=({children})=>{
    return(
       <div className="flex">
        <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex-col justify-between">
       <div className="flex flex-col items-center">
          <Link href={"/"}>
                <div>
                    <WorkspacesIcon/>
                </div>
          </Link>
       </div>
        </div>
        <main className='ml-20 w-full'> {children}</main>
       </div>
    )
}