import WelcomeTemplate from "@/emails/WelcomTemplate"
import { NextResponse } from 'next/server'
// import { Resend } from 'resend'


// const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(){
    //  await resend.emails.send({
    //     from: 'xlearn.me@gmail.com',
    //     to: 'zakariaraji.me@gmail.com',
    //     subject: 'Welcome aboard!',
    //     html: "<h1>HOLSSKSNJSKLJS</h1>"

    //     // react: <WelcomeTemplate name='Zakaria'/>
    // })

    return NextResponse.json({"msg":"message sent"})
}  