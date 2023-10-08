import Image from "next/image";

import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Link from "next/link";
import Layout from "../../layout/layout";
import Head from "next/head";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { registerValidate } from "../../lib/validations";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



export default function Register() {
  const router=useRouter()
  const formik=useFormik({
    initialValues:{
      Username:"",email:"",password:"",cpassword:""
  },validate:registerValidate,
  onSubmit
  })
  async function onSubmit(values){
    const options = {
        method: "POST",
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
        .then(res => res.json())
        .then((data) => {
            if(data) {
            toast(data.message,{hideProgressBar:true,autoClose:4000,type:"warning",position:"top-center"});}
           return router.push('/login')
        })
}
   return (<Layout>

   <Head>
    <title>Register</title>
   </Head>
           <div className="row g-0">
             <div className="col-md-6 col-lg-6d-none d-md-block">
               <Image src="/images/jobs.jpg" width={420}
        height={580} 
          
                     alt="Register" className="rounded-1" />
             </div>
             <div className="col-md-6 col-lg-6 d-flex align-items-center">
               <div className="card-body p-4 p-lg-5 text-black">
 
                 <form onSubmit={formik.handleSubmit}>
 
                   <div className="d-flex align-items-center mb-3 pb-1">
                     <WorkspacesIcon fontSize="large"/>
                     <span className="h1 fw-bold mb-0 ms-1">Jobs</span>
                   </div>
 
                   <h5 className="fw-normal mb-3 pb-3" >Sign Up</h5>



                   
                   <div className="form-floating mb-4">
                                    <input
                                        type="text"
                                        name="Username"
                                        className={`form-control form-control-lg ${formik.errors.Username && formik.touched.Username &&"border border-danger"}`}
                                        id="floatinguser"
                                        placeholder="Username"
                                        {...formik.getFieldProps('Username')}
                                    />
                                    <label htmlFor="floatinguser">Username</label>
                                   
                                </div>
 
                   
                   <div className="form-floating mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control form-control-lg ${formik.errors.email && formik.touched.email &&"border border-danger"}`}
                                        id="floatingEmail"
                                        placeholder="Email Adress"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <label htmlFor="floatingEmail">Email Adress</label>
                                </div>

                              
 
                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control form-control-lg ${formik.errors.password && formik.touched.password &&"border border-danger"}`}
                                        id="floatingPassword"
                                        placeholder="Password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        name="cpassword"
                                        className={`form-control form-control-lg ${formik.errors.cpassword && formik.touched.cpassword &&"border border-danger"}`}
                                        id="floatingcPassword"
                                        placeholder="comfirm Password"
                                        {...formik.getFieldProps("cpassword")}
                                    />
                                    <label htmlFor="floatingcPassword">comfirm Password</label>
                                </div>
                   
                   
 
                   <div className="pt-1 mb-2">
                     <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                   </div>
               
                   
                   <p className="mb-2 pb-lg-2" style={{color: "#393f81"}}>Have an account?  <Link href={'/login'}
                       style={{color: "#393f81"}}>Login here</Link></p>
                   <Link href="#!" className="small text-muted">Terms of use.</Link>
                   <Link href="#!" className="small text-muted">Privacy policy</Link>
                 </form>
 
               </div>
             </div>
           </div></Layout>
   )
} 