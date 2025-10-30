import React, { useState } from 'react'

const AddLocationModal = ({lat,lng,setAdding,setPending}) => {
//js

const [name,setName] =useState("")
console.log(name)



  return (
    <div className='fixed inset-0 bg-black/50 
    flex items-center justify-center z-[9999]'>
        <div className='bg-white p-6 rounded-2xl shadow-2xl w-96'>

            <h3 className='text-xl '>เพิ่มจุดเข้าเวรใหม่</h3>

            <div className='text-xs text-gray-500 mb-2'
            >Lat:{lat.toFixed(6)}, Lng:{lng.toFixed(6)} </div>

            <input className='w-full border px-4 py-2  border-gray-300 
            rounded-md mb-4 focus:outline-none focus:ring-purple-500 focus:ring-2'
            placeholder='Input Name'
            autoFocus
            onChange={(e)=>setName(e.target.value)}/>

            <div className='flex gap-4'>
                <button>Save</button>
                <button>Cancel</button>
            </div>


        </div>
    </div>
  )
}

export default AddLocationModal