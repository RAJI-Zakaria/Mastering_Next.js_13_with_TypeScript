'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <button className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-700' onClick={() => alert('product added successfully')}>
      Add to cart
    </button>
  )
}

export default AddToCart
