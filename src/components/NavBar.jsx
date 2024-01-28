'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';

export default function NavbarWithDropdown() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="/">
        <Image
        width={32}
        height={32}
          alt="Flowbite React Logo"
          // className="mr-3 h-6 sm:h-9"
          src="/logo.png"
        />
        <span className="self-center whitespace-nowrap ml-2 text-xl font-semibold dark:text-white">
          NEXT BLOG
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="blogs">
          Blogs
        </Navbar.Link>
        <Navbar.Link href="about">
          About
        </Navbar.Link>
        <Navbar.Link href="contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


