import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Respons = ({data}) => {
    const {id, job_post_name, company_name, company_logo, location, salary, category} = data
    return (
        <div className='p-6 border rounded-lg flex justify-between items-center mb-10'>
            <div className='w-60 h-60 flex justify-center items-center bg-gray-300 rounded-xl p-4'>
                <img className='w-auto mb-3' src={company_logo} alt="" />
            </div>
            <div>
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
            </div>
            <div className='gradient'>
                <Link to = {`/${id}`}><button className="py-2 px-4 text-lg font-extrabold text-white rounded-lg">View Details</button></Link>
            </div>
        </div>
    );
};

export default Respons;