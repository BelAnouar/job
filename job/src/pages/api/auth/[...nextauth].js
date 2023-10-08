import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import  GithibProvider from "next-auth/providers/github"

import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from "../../../../database/conn"
import Users from "../../../../model/schema"
import {compare } from "bcryptjs"




export default NextAuth({
    providers:[
        //google Provide
        GoogleProvider({
            clientId:`462494049339-t8ik0vcs7b5aptktnievterc58mm5ng3.apps.googleusercontent.com`,
            clientSecret:`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`
        }),GithibProvider({
            clientId:`fc807ffb3dde2bd6dae0`,
            clientSecret:`0bbe3bbd33e7fd173a184373a0af452c85d07aef`
        }),CredentialsProvider({
            name:"credentials",
            async authorize(credentials,req){
                connectMongo().catch(error=>{error:"Connection failed..§"})

                const result=await Users.findOne({email:credentials.email})
                if(!result){
                    throw new Error("user not found...")
                }

                const checkPassword=await compare(credentials.password,result.password)

                if(!checkPassword || result.email!==credentials.email){
                       throw new Error("username or password doesn't match")
                }
                return result
            }
        })
    ]
})