import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Link, useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import SingleJob from '../Job/SingleJob/SingleJob';
const Home = () => {
    const[categories, useCategories] = useState([]);
    const jobList = useLoaderData();
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => useCategories(data));
    },[]);
    return (
        <div className=' pt-8 container mx-auto px-8 md:px-32 lg:px-48' >

            {/*------------------- Banner-------------------------
            ----------------------section ---------------------*/}

            <div className='banner background-color flex gap-8 flex-col justify-between items-center  md:flex-row lg:flex-row'>
                <div className="left text-center md:text-left lg:text-left flex-1 pr-0 md:pr-6 lg:pr-6">
                    <h1 className='gradient text-4xl md:7xl lg:7xl text-center md:text-left lg:text-left font-extrabold mb-4'>One Step Closer To Your <span>Dream Job</span></h1>
                    <p  className='text-center md:text-left lg:text-left text-lg  font-medium text-gray-500 mb-4 tracking-wide'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to={"/job"}><button className='py-4 px-7 text-white rounded-md font-bold'>Get Started</button></Link>
                </div>
                <div className="right flex-1">
                <img className='w-96 mx-auto' src="https://i.ibb.co/YBB8FM3/samiul1.png" alt="samiul1" border="0" />
                </div>
            </div>
            
            {/*------------------- Category-------------------------
            ----------------------section ---------------------*/}
            
            <div className="category my-16 md:my-36 lg:my-36">
                <h2 className='text-3xl md:6xl lg:6xl text-center font-extrabold mb-4'>Job Category List</h2>
                <p className='text-center text-base font-medium text-gray-500 mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 rounded gap-4'>
                    {categories.map(category => <Categories key={category.id} category={category}></Categories>)}
                </div>
            </div>

            {/*------------------- Feature-------------------------
            ----------------------section ---------------------*/}

            <div className="feature mb-16 md:mb-36 lg:mb-36">
                <h2 className='text-3xl md:6xl lg:6xl text-center font-extrabold mb-4'>Featured Jobs</h2>
                <p className='text-center text-base font-medium text-gray-500 mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'> 
                    {jobList.slice(0,4).map(job => <SingleJob key={job.id} job={job}></SingleJob>)}
                </div>

            </div>
        </div>
    );
};

export default Home;