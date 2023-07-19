'use client';
import Image from 'next/image';
import logo from '@/public/logo.png';
import ham from '@/public/ham.svg';
import NavItem from './NavItems';
import React from 'react';

const items = [
    {
        prefix: '00',
        name: 'HOME',
        link: '/',
    },
    {
        prefix: '01',
        name: 'DESTINATION',
        link: '/destination',
    },
    {
        prefix: '02',
        name: 'CREW',
        link: '/crew',
    },
    {
        prefix: '03',
        name: 'TECHNOLOGY',
        link: '/technology',
    },
];

function Navbar() {
    return (
        <div className="flex justify-between items-center box-border mt-4 desktop:mt-6">
            {/* <div className="navDiv h-20 flex justify-between items-center max-tablet:hidden absolute right-0 pr-10"></div> */}
            <div className="logo">
                <Image src={logo} alt="logo" />
            </div>
            <div className="hamburger tablet:hidden">
                <Image src={ham} alt="ham" />
            </div>
            <div className="navItems hidden tablet:block">
                <NavItem items={items} />
            </div>
        </div>
    );
}
export default Navbar;
