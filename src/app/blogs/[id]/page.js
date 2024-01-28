import loadSingleBlog from '@/utilities/loadSingleBlog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog = async ({params}) => {
    // console.log(params.title);
    const {id, title, image, description, date} = await loadSingleBlog(params.id)
    return (
        <div className='md:min-h-screen mt-16 md:w-2/3 mx-auto'>
            <h5 className='mb-5 text-center'>Single Blog</h5>
            <br/>
            <div className='md:flex justify-center'>
            <div>
            <h2 className="text-center text-5xl font-bold mb-10">{title}</h2>
            <div className='md:flex justify-between items-center gap-8'>
            <Image src={image} width={500} height={400} alt='' className='rounded'/>
            <div>
            <p className='mb-3 text-xl'>Published: {date}</p>
            <p className='mb-5'>{description}</p>
            <Link href={`/blogs`}><button className="btn hover:bg-indigo-700 hover:text-white">Back to Blogs</button></Link>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SingleBlog;