'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

interface CloudinaryResult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
  return (
    <>
    {publicId && <CldImage width={570} height={480} src={publicId} alt="" />}
    <CldUploadWidget
        onUpload={(result, widget)=>{
            if(result.event === 'success'){
                const info = result.info as CloudinaryResult
                setPublicId(info.public_id)
            }else{
                console.log('error', result.info)
            }
        }}
        uploadPreset='akkthcwg'>

            {({open})=> 
                    <button className='btn btn-primary'
                    onClick={()=>{open()}}
                    >Upload</button>}

    </CldUploadWidget>
    </>
  )
}

export default UploadPage