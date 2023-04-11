import React from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Assignment 1',
            totalMark: 60,
            gotMark: 60,
        },
        {
            name: 'Assignment 2',
            totalMark: 60,
            gotMark: 60,
        },
        {
            name: 'Assignment 3',
            totalMark: 60,
            gotMark: 60,
        },
        {
            name: 'Assignment 4',
            totalMark: 60,
            gotMark: 60,
        },
        {
            name: 'Assignment 5',
            totalMark: 60,
            gotMark: 42,
        },
        {
            name: 'Assignment 6',
            totalMark: 60,
            gotMark: 57,
        },
        {
            name: 'Assignment 7',
            totalMark: 60,
            gotMark: 60,
        },
        {
            name: 'Assignment 8',
            totalMark: 60,
            gotMark: 60,
        },
    ];
    // Average mark calculation

    let gotMarks = 0;
    
    for (const total of data) {
        gotMarks = gotMarks + total.gotMark;
    }
    const avgMark = gotMarks/data.length;
    return (
        <div className='mt-12 overflow-x-scroll'>
            <div className='background-color h-64 flex justify-center items-center mb-8'>
                <h2 className='text-3xl font-extrabold'>Statistics Page</h2>
            </div>
            <h2 className='text-3xl font-bold text-center mb-8'>Avg Mark : {avgMark}</h2>

            
            <BarChart
                width={1000}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                className='w-full mx-auto  '>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar className='mt-6'  dataKey="gotMark" fill="#8884d8" minPointSize={5}>
                    
                </Bar>
                <Bar className='mt-6' dataKey="totalMark" fill="#82ca9d" minPointSize={10} />
                </BarChart>
            
        </div>
    );
};

export default Statistics;