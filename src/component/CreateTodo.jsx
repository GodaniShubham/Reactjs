import React from 'react'

const CreateTodo = () => {
  return (
    <>
        <div className='w-full'>
            <form className='flex gap-3'>
                <input type="text" className='border w-full rounded px-2 text-xl text-green-900' placeholder='Enter Todo '/>
                <button className='text-xl bg-green-400 py-1 px-2 rounded text-green-900 hover:bg-green-300 hover:text-gray-900 '>Submit</button>
            </form>
        </div>
    </>
  )
}

export default CreateTodo