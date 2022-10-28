import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourses from '../DisplayCourses/DisplayCourses';
import Header from '../Header/Header';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Header></Header>
        <div className='container mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold mb-10'>Populer Courses</h1>
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                 courses.map(course =><DisplayCourses 
                    key={course.id}
                    course={course}
                 ></DisplayCourses> )
            }
            </div>
           
        </div>
        </div>
    );
};

export default Home;