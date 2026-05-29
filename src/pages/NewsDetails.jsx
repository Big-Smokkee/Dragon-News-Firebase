import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    // const newsCardDetails = allNewsData.filter(news => news.id === id);
    // console.log(newsCardDetails, "news card id: ", id)
    const data = useLoaderData();
    const { id } = useParams();


    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === id)
        setNews(newsDetails);
    }, [data, id])
    // console.log(news);
    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='left col-span-9'>
                    <h2 className='text-primary text-xl font-semibold mb-5'>Dragon News</h2>
                    <div>
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                    </div>
                </section>
                <aside className='right col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;