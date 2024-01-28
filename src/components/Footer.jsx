'use client';

import { Footer } from 'flowbite-react';

const DefaultFooter =() =>{
  return (
    <Footer container className='text-slate-800'>
      <Footer.Copyright
        by="by Next Blog"
        href="#"
        year={2023}
        className='my-2'
      />
      <Footer.LinkGroup className='my-2'>
        <Footer.Link href="#" className='mr-3'>
          Home
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          Contact
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          Blogs
        </Footer.Link>
        <Footer.Link href="#" className='mr-3'>
          About
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default DefaultFooter;
