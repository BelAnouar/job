

import Format from '../../layout/format'
import FromProfile from './components/FormProfile'
import Headers from './components/header'




export default function Profile(){
    return(
        <Format>
     


     <main className="bg-gray-100 min-h-screen">
                <Headers/>
               <FromProfile/>
                
      </main>
      
      
    </Format>
    )
}


