import Image from "next/image";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSession,signIn,signOut } from 'next-auth/react';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Link from "next/link";
import Layout from "../../layout/layout";
import Head from "next/head";
import { useFormik } from "formik";
import login_validate from "../../lib/validations";
import { useRouter } from "next/router";
import { toast } from "react-toastify";




export default function Login() {

    const router=useRouter()

    const formik=useFormik({
        initialValues:{
            email:"",password:""
        },validate:login_validate
        ,onSubmit
    })


    async function onSubmit(values){
      const status=  await signIn("credentials",{redirect:false,email:values.email,password:values.password,callbackUrl:"/"})
       if (status.ok) {
        return router.push(status.url)
       } 
       toast(status.error,{hideProgressBar:true,autoClose:4000,type:"warning",position:"top-center"});
       
    }

    async function handleGoogleSignIn(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
    }
    async function handleGithubSignIn() {
        signIn("github",{callbackUrl:"http://localhost:3000"})
    }
   return (<Layout>
   <Head>
    <title>Login</title>
   </Head>
           <div className="row g-0">
             <div className="col-md-6 col-lg-6d-none d-md-block">
               <Image src="/images/jobs.jpg" width={420}
        height={580}
          
                     alt="login" className="rounded-1" />
             </div>
             <div className="col-md-6 col-lg-6 d-flex align-items-center">
               <div className="card-body p-4 p-lg-5 text-black">
 
                 <form onSubmit={formik.handleSubmit}>
 
                   <div className="d-flex align-items-center mb-3 pb-1">
                     <WorkspacesIcon fontSize="large"/>
                     <span className="h1 fw-bold mb-0 ms-1">Jobs</span>
                   </div>
 
                   <h5 className="fw-normal mb-3 pb-3" >Sign In</h5>
 
                   
                   <div className="form-floating mb-4">
                                    <input
                                    name="email"
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="floatingEmail"
                                        placeholder="Email Adress"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <label htmlFor="floatingEmail">Email Adress</label>
                                </div>

                              
 
                                <div className="form-floating mb-4">
                                    <input
                                        type="text"
                                        name="password"
                                        className="form-control form-control-lg"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                   
                   
 
                   <div className="pt-1 ">
                     <button className="btn btn-dark btn-lg btn-block" name="login" type="submit">Login</button>
                   </div>
                   <div className="divider d-flex align-items-center my-2">
            <p className="text-center fw-bold mx-3 text-muted">OR</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-2">
            <p className="lead fw-normal mb-0 me-3">Sign in with:</p>
            <button onClick={handleGoogleSignIn}   type="button" className="btn  btn-outline-danger me-2">
             Google  <GoogleIcon fontSize="medium"/>
            </button>

            <button onClick={handleGithubSignIn} type="button" className="btn btn-outline-dark me-2">
            GitHub <GitHubIcon fontSize="medium"/>
            </button>

            
          </div>
                   <Link className="small text-muted" href="#!">Forgot password?</Link>
                   <p className="mb-4 pb-lg-2" style={{color: "#393f81"}}>Don't have an account?<Link href={'/register'}
                       style={{color: "#393f81"}}>Register here</Link></p>
                   <Link href="#!" className="small text-muted">Terms of use.</Link>
                   <Link href="#!" className="small text-muted">Privacy policy</Link>
                 </form>
 
               </div>
             </div>
           </div>
           </Layout>)
} 