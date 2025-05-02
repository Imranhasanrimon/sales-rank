import React from 'react';

const CourseCard = ({ image }) => {
    return (
        <div className='bg-[#F0F0F0] p-5 rounded-2xl flex flex-col'>
            <img src={image} alt="course image" className='w-full' />

            <div className='flex items-center justify-between mt-7'>
                <div className='flex items-center gap-4'>
                    <span className='bg-white py-2 px-4 rounded-xl inline-block'>4 Weeks</span>
                    <span className='bg-white py-2 px-4 rounded-xl inline-block'>Beginner</span>
                </div>
                <span className=''>By John Smith</span>
            </div>
            <h3 className='text-2xl font-semibold mt-7'>Web Design Fundamentals</h3>
            <p className='text-[#4C4C4D] text-lg mt-3 mb-7 grow'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>

            <button className='bg-[#002868] text-white py-2 md:py-4 rounded-lg text-xl font-medium cursor-pointer w-full'>Get it Now</button>
        </div>
    );
};

export default CourseCard;