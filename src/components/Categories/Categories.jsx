import React from 'react';
import "./Categories.css"
const Categories = ({category}) => {
    const {job_img, Job_Category, total_job} = category;
    return (
        <div className='background-color p-10 rounded-md text-center'>
            <div className='p-4 rounded-md cat-img w-20 h-20 m-auto text-center flex justify-center items-center mb-4'>
                <img className='w-10 h-10 ' src={job_img} alt="" />
            </div>
            <h4 className='text-xl font-extrabold mb-2'>{Job_Category}</h4>
            <p className='text-base font-medium text-gray-500'>{total_job} Jobs Available</p>
        </div>
    );
};

export default Categories;