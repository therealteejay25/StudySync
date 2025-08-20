import React from 'react'

const Contact = () => {
  return (
    <div className='bg-background relative min-h-screen flex flex-col py-24 justify-center items-center dark:bg-darkbackground p-6'>
        <div className='flex flex-col items-center text-center gap-8 p-16 bg-accent w-5xl h-96 rounded-3xl'>
        <h2 className='text-4xl text-background font-semibold'>
            Take control of your learning experience.
        </h2>
        <p className='text-lg w-2xl text-background'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti alias sed officia aperiam 
        </p>
        <button className="bg-background w-xs border-2 w-full cursor-pointer border-accent text-accent font-semibold rounded-xl px-6 py-4 font-medium">
            Sign Up
          </button>
        </div>

        <div className='flex w-full items-center justify-between absolute bottom-2 p-6'>
            <img src='logo.svg' className='h-10' />
            <p className='text-textdark dark:text-textlight'>2025 @therealteejay25</p>
        </div>
    </div>
  )
}

export default Contact