import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utils/fakeDb';
import Respons from '../Respons/Respons';

const Applied = () => {
    const [data , useData] = useState([])
    const appliedData = useLoaderData();

    useEffect(()=>{
        const aData = getShoppingCart();
        let newData = []
        for (const id in aData){
        const myData = appliedData.find(d => d.id == id)
        if (myData) {
            newData.push(myData);
        }
    }
    useData(newData);
    },[])
    return (
        <div>
            <div className='background-color h-64 flex justify-center items-center mb-8'>
                <h2 className='text-3xl font-extrabold'>Applied Job</h2>
            </div>

            <div className='container mx-auto px-8 md:px-32 lg:px-48 my-16 md:my-24 lg:my-24'>
                {
                    data.map(data => <Respons key={data.id} data={data}></Respons>)
                }
            </div>
        </div>
    );
};

export default Applied;