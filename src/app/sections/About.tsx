import { BellRing, CalendarCheck, NotebookText, ChartNoAxesCombined } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className='bg-background min-h-screen flex flex-col py-24 justify-center items-center dark:bg-darkbackground p-6'>
      <h1 className='text-accent text-4xl font-bold text-center mb-4'>Simplifying Your Study Journey</h1>
      <p className='w-2/4 text-center text-dark dark:text-light mb-8  p-4'>
        Studying doesn’t have to feel overwhelming. StudySync streamlines your routine with tools that adapt to your needs, keeping you organized, focused, and confident every step of the way
      </p>
      <div className='grid mx-48 grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white flex flex-col gap-6 dark:bg-transparent p-6 rounded-4xl border-2 border-accent text-left'>
          <CalendarCheck color='#274FF8' size={32} />
          <h2 className='text-2xl font-semibold text-accent'>Smart Scheduling</h2>
          <p className='text-dark dark:text-light'>Adaptive plans that sync with your pace, exam deadlines, and calendar — so you always know what to study next.</p>
        </div>
        <div className='flex flex-col gap-5'>
        <div className='bg-white dark:bg-transparent flex flex-col gap-6 items-center p-6 rounded-4xl border-2 border-accent text-center'>
          <NotebookText color='#274FF8' size={32} />
          <h2 className='text-2xl font-semibold text-accent'>Notes & Resources</h2>
          {/* <p className='text-dark dark:text-light'>Notes & Resources</p> */}
        </div>
        <div className='bg-white dark:bg-transparent flex flex-col gap-6 items-center p-6 rounded-4xl border-2 border-accent text-center'>
          <ChartNoAxesCombined color='#274FF8' size={32} />
          <h2 className='text-2xl font-semibold text-accent'>Reports and Analysis</h2>
          {/* <p className='text-dark dark:text-light'>Notes & Resources</p> */}
        </div>
        </div>
        <div className='bg-white dark:bg-transparent p-6 rounded-4xl border-2 border-accent text-left flex flex-col gap-6'>
          <BellRing color='#274FF8' size={32} />
          <h2 className='text-2xl font-semibold text-accent'>Adequate Reminders</h2>
          <p className='text-dark dark:text-light'>Get timely nudges to stay on track without stress — from daily study reminders to exam countdowns.</p>
        </div>
        </div>
        <div className='flex w-full gap-6 justify-center items-center my-16'>
        <div className='p-4 flex flex-col items-center justify-center gap-6 text-center'>
          <h2 className='text-3xl font-semibold text-dark dark:text-light'>Digital Experience</h2>
          <p className='text-accent text-9xl font-bold'>24+</p>
          <div className='text-dark dark:text-light w-sm mb-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti alias sed officia aperiam 
          </div>
        </div>
        <div className='p-4 flex flex-col items-center justify-center gap-6 text-center'>
          <h2 className='text-3xl font-semibold text-dark dark:text-light'>Total Clients</h2>
          <p className='text-accent text-9xl font-bold'>4M</p>
          <div className='text-dark dark:text-light w-sm mb-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti alias sed officia aperiam 
          </div>
        </div>
        <div className='p-4 flex flex-col items-center justify-center gap-6 text-center'>
          <h2 className='text-3xl font-semibold text-dark dark:text-light'>Digital Solutions</h2>
          <p className='text-accent text-9xl font-bold'>5K</p>
          <div className='text-dark dark:text-light w-sm mb-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti alias sed officia aperiam 
          </div>
        </div>
         </div>
    </div>
  );
};

export default About;