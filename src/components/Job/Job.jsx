import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob/SingleJob';

const Job = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <div className='background-color h-64 flex justify-center items-center mb-8'>
                <h2 className='text-3xl font-extrabold'>All Jobs</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 container mx-auto px-8 md:px-32 lg:px-48 my-16 md:my-24 lg:my-24 '> 
                    {jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)}
            </div>
        </div>
    );
};

export default Job;