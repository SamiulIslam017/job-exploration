import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { addToDb } from '../../utils/fakeDb';

const JobDetailes = () => {
    const [detailsData , useDetailsData] = useState({});
    const single = useLoaderData();
    const {id} = useParams();
    useEffect(()=>{
        const details = single.find(data => data.id == id);
        useDetailsData(details);
    },[])

    const handelApply = (id) =>{
        addToDb(id);
    }


    
    
    return (
        <div>
            <div className='background-color h-64 flex justify-center items-center mb-8'>
                <h2 className='text-3xl font-extrabold'>Job Details</h2>
            </div>

            <div className='container mx-auto px-8 md:px-32 lg:px-48 my-16 md:my-24 lg:my-24 flex justify-between gap-6'>
                {/* 
                    left side data
                */}
                <div className="details-left w-8/12">
                    <p className='mb-4 text-base font-extrabold'>Job Description:      <span className='font-normal'>{detailsData.job_description}</span>
                    </p>
                    <p className='mb-4 text-base font-extrabold'>Job Responsibility:      <span className='font-normal'>
                        {
                        detailsData.responsibility
                        }</span>
                    </p>
                    <p className='mb-4 text-base font-extrabold'>Education Requirements:      <span className='font-normal'>{detailsData.education}</span>
                    </p>
                    <p className='mb-4 text-base font-extrabold'>Experiences:      <span className='font-normal'>{detailsData.experience}</span>
                    </p>
                </div>
                {/* 
                    Right side data
                */}
                <div className='details-right w-4/12'>
                    <div className='p-7 bg-purple-200 rounded-lg mb-6'>
                        <h5 className='py-3 text-lg font-bold'>Job Details</h5>

                        <div className='border border-slate-400'></div>

                        <p className='flex gap-1 text-base font-semibold my-2'>
                            <CurrencyDollarIcon className='w-5 h-5 text-purple-400'></CurrencyDollarIcon> 
                            Salary: <span className='font-normal'>{detailsData.salary} (per year)</span>
                        </p>
                        <p className='flex gap-1 text-base font-semibold my-2'>
                            <BriefcaseIcon className='w-5 h-5 text-purple-400'></BriefcaseIcon> 
                            Job Title: <span className='font-normal'>{detailsData.job_post_name}</span>
                        </p>
                        <h5 className='py-3 text-lg font-bold'>Contact Information</h5>

                        <div className='border border-slate-400'></div>

                        <p className='flex gap-1 text-base font-semibold my-2'>
                            <PhoneIcon className='w-5 h-5 text-purple-400'></PhoneIcon> 
                            Phone: <span className='font-normal'>{detailsData.phone ? detailsData.phone : 'Not Available'}</span>
                        </p>
                        <p className='flex gap-1 text-base font-semibold my-2'>
                            <EnvelopeIcon className='w-5 h-5 text-purple-400'></EnvelopeIcon> 
                            Email: <span className='font-normal'>{detailsData.email}</span>
                        </p>
                        <p className='flex gap-1 text-base font-semibold my-2'>
                            <MapPinIcon className='w-5 h-5 text-purple-400'></MapPinIcon> 
                            Address: <span className='font-normal'>{detailsData.location}</span>
                        </p>
                    </div>

                    <div className='gradient block'>
                        <Link to = {'/applied'}>
                            <button onClick={() => handelApply(detailsData.id)} className='py-2 px-4 text-lg font-extrabold text-white rounded-lg w-full'>Apply Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetailes;