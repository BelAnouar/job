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
            clientId:  // Client ID google Auth ,
            clientSecret://code google Auth
        }),GithibProvider({
            clientId: // Client ID google Auth ,
            clientSecret: //code google Auth
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
