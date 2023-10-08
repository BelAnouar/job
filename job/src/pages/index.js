import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getSession, signOut, useSession } from 'next-auth/react'

import Format from '../../layout/format'
import Headers from './components/header'
import Topcards from './components/Topcads'
import BarChart from './components/Barchart'
import { useState } from 'react'


export default function Home() {
  const [barchart,setBarchar]=useState(true)
  const {data:session}=useSession()
  const handleSignOut=()=>{
    signOut()
  }
  return (
    <Format>
     


     <main className="bg-gray-100 min-h-screen">
                <Headers/>
                <Topcards/>
                
                <BarChart/>
                
               
      </main>
      
      
    </Format>
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