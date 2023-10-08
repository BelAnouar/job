

import Format from "../../layout/format"
import AddjobForm from "./components/addjobForm"
import Headers from "./components/header"




export default function Addjob(){
    return(<Format>
          <main className="bg-gray-100 min-h-screen">
                <Headers/>
                
                
                <AddjobForm/>
               
      </main>
      
    </Format>)
}