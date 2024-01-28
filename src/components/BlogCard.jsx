"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
// import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { title, description, image, id } = blog;
  // console.log(blog);
  return (
    <Card
      imgAlt=""
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {title}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link href={`/blogs/${id}`}><button className="btn hover:bg-indigo-700 hover:text-white">Read More</button></Link>
    </Card>
  );
};

export default BlogCard;
