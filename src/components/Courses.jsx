import React from 'react';
import CourseCard from './CourseCard';
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

const Courses = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 mt-20 manrope">
            <h3 className=" text-3xl md:text-5xl lg:text-6xl mt-5 mb-2">Our Courses</h3>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
                <p className='text-lg text-[#59595A] md:w-[80%] lg:w-[70%]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

                <button className='bg-[#002868] text-white px-4 py-2 md:py-4 md:px-6 rounded-lg text-xl font-medium cursor-pointer'>View All</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
                <CourseCard image={image2} />
                <CourseCard image={image3} />
            </div>
        </div>
    );
};

export default Courses;