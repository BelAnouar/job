import MenuAccount from "./MenuAccount";

import { getSession} from 'next-auth/react'






export default function Headers(){
    return(
        <div className="flex justify-between px-4 pt-4  mb-[2.9rem]">
            
            <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl sticky top-0 scroll-smooth">
                <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div className="container relative left-0 z-50 flex w-3/4 h-full">
                            <div className="relative flex items-center w-full h-full lg:w-64 group">
                                Dashboard
                                </div>
                            </div>
                            <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <div className="relative block">
                                   <MenuAccount/>   
                                </div>
                            </div>
                        </div>
                    </div>
           </header>
          
        </div>
    )
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