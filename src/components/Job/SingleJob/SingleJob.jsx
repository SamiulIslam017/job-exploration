import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const SingleJob = ({job}) => {
    const {id, job_post_name, company_name, company_logo, location, salary, category} = job;
    return (
        <div className='p-10 border rounded-lg'>
            <img className='h-10 mb-3' src={company_logo} alt="" />
            <h2 className='text-2xl font-extrabold mb-2'>{job_post_name}</h2>
            <h6 className='text-lg font-semibold mb-2'>{company_name}</h6>
            <div className='flex gap-4 gradient mb-3'>
                <span className='text-base font-extrabold py-2 px-5 border rounded'>{category[0]}</span>
                <span className='text-base font-extrabold py-2 px-5 border rounded'>{category[1]}</span>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row  gap-4 mb-4'>
                <span className='flex gap-1 text-xl font-semibold'><MapPinIcon className='w-6 h-6 font-light'></MapPinIcon> {location}</span>
                <span className='flex gap-1 text-xl font-semibold'><CurrencyDollarIcon className='w-6 h-6'></CurrencyDollarIcon> {salary}/ Year</span>
            </div>
            <div className='gradient'>
                <button className="py-2 px-4 text-lg font-extrabold text-white rounded-lg">View Details</button>
            </div>
        </div>
    );
};

export default SingleJob;