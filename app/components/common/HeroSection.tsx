import React from 'react'
import Image from 'next/image'
import { authOptions } from '@/app/api/auth/authOptions';
import { getServerSession } from 'next-auth';
import SampleButton from '../button/SampleButton';

const HeroSection = async() => {
    const session  = await getServerSession(authOptions);
  return (
    <div className="hero min-h-fit bg-base-200 py-5 rounded-xl mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse my-5">
            <Image alt="" src="/spider-man.jpeg" className="max-w-sm rounded-lg shadow-2xl" width={240} height={240} />
            <div>
            <h1 className="text-5xl font-bold">I am Zakaria RAJI!</h1>
            <p className="py-6">Hello and welcome {session && <strong>{session.user!.name}</strong>}, i am a software engineer based in France Montpellier and Lannion<br/>Thirsty to working with you on a challenging project.</p>
            <SampleButton />    
            </div>
        </div>
    </div>
  )
}

export default HeroSection