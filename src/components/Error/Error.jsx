import React from 'react';
import "./Error.css";
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const error = useRouteError();
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Oops!</h1>
        <p className='text-red-600'>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
};

export default Error;