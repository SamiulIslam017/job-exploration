import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='background-color h-64 flex justify-center items-center mb-8'>
                <h2 className='text-3xl font-extrabold'>Blog Pages</h2>
            </div>
            <div className='container mx-auto px-8 md:px-32 lg:px-48 my-16 md:my-24 lg:my-28'>
                <div className='p-8 border mb-6'>
                    <h1 className='text-3xl font-bold'>When should you use context API?</h1>
                    <p>In react when we need to pass some data from one components to another components we using by passing props . This also called Props Drilling.But when we work a bog project then this system will difficult for us.
                    
                    For solution we can use context api .When we use context api then we can pass our data easily from one component to another components.
                    </p>
                </div>
                <div className='p-8 border mb-6'>
                    <h1 className='text-3xl font-bold'>What is a custom hook?</h1>
                    <p>when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also increase the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. And remember one think custom hook name start with "use" .
                    </p>
                </div>
                <div className='p-8 border mb-6'>
                    <h1 className='text-3xl font-bold'>What is useRef?</h1>
                    <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference . A reference is an object having a special property current.
                    </p>
                </div>
                <div className='p-8 border mb-6'>
                    <h1 className='text-3xl font-bold'>What is useMemo?</h1>
                    <p>useMemo is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;