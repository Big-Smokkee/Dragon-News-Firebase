import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
        <div className='border border-base-300 p-7 rounded-[5px]'>
            <img src={news.image_url} alt="image_url" className='h-[350px] w-full object-cover rounded-[5px]' />
            <h3 className='font-bold text-primary text-[25px] mb-2'>{news.title}</h3>
            <p className='text-accent mb-8'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='px-6 py-2 bg-secondary text-white flex items-center gap-2 cursor-pointer w-fit'>
                <FaArrowLeft />
                <p>All news in this category</p>
            </Link>
        </div>
    );
};

export default NewsDetailsCard;