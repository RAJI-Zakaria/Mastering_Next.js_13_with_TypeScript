'use client'
import React from 'react'

interface Props{
    error: Error;
    reset: () => void;
}
const ErrorPage = ({error, reset}:Props) => {
    //wen can use Sentry for persistent logging
    console.log(error)
  return (
    <>
    <div>An unexpected error occurred</div>
    <button className='btn btn-primary' onClick={()=>reset()}>Reload</button>
    </>
  )
}

export default ErrorPage