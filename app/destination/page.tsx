'use client';
import Image from 'next/image';
import MiniNavbar from '../components/navbar/MiniNav';
import { Destination } from '../props/destinationProps';

const items = [
    {
        index: 0,
        prefix: '00',
        name: 'MOON',
        link: '/',
    },
    {
        index: 1,
        prefix: '01',
        name: 'MARS',
        link: '/destination',
    },
    {
        index: 2,
        prefix: '02',
        name: 'EUROPA',
        link: '/crew',
    },
    {
        index: 3,
        prefix: '03',
        name: 'TITAN',
        link: '/technology',
    },
];
import places from '@/app/destination/destination';
import { useState } from 'react';
import { Item } from '../props/NavProps';

function Destination() {
    const [place, setPlace] = useState<Destination>(places[0]);

    const onTabChange = (item: Item) => {
        setPlace(places[item.index || 0]);
    };

    return (
        <div className="bg-destination-mobile">
            <p className="text-center tracking-wides text-base font-normal tablet:text-xl tablet:text-left tablet:ml-9 tablet:mt-16 desktop:text-[28px] desktop:ml-20">
                <span className="opacity-25">01</span>
                <span className="ml-2 desktop:ml-4 desktop:tracking-widest">
                    PICK YOUR DESTINATION
                </span>
            </p>
            <div className="flex justify-center items-center flex-col mt-8 desktop:flex-row desktop:mt-24 desktop:ml-20">
                <div className="image flex justify-center items-center desktop:flex-1 mb-7 desktop:m-0 desktop:items-end">
                    <Image
                        src={place?.image || '../../fake.png'}
                        alt="moon"
                        width={0}
                        height={0}
                        className="h-mobile_moon w-mobile_moon tablet:h-tablet_moon tablet:w-tablet_moon desktop:h-desktop_moon desktop:w-desktop_moon"
                    />
                </div>
                <div className="flex justify-center items-center flex-col desktop:flex-1 desktop:text-left desktop:w-full desktop:items-start">
                    <MiniNavbar items={items} onTabChange={onTabChange} />
                    <p className="font-bellefair text-center text-6xl font-normal mt-5 leading-tight tablet:text-7xl desktop:text-h2 desktop:text-left">
                        {place?.place}
                    </p>
                    <p className="font-barlow leading-6 text-sm text-center px-6 tablet:px-24 desktop:leading-8 desktop:p-0 desktop:text-left desktop:text-lg desktop:pr-52">
                        {place?.description}
                    </p>
                    <div className="h-min w-4/5 mt-8 bg-gray desktop:mt-14 desktop:w-3/4"></div>
                    <div className="journey flex flex-col mt-8 gap-8 tablet:flex-row tablet:gap-12">
                        <div className="flex flex-col gap-3">
                            <p className="font-barlow text-sm text-center">
                                AVG. DISTANCE
                            </p>
                            <p className="font-bellefair text-3xl text-center">
                                {place?.distance}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-barlow text-sm text-center">
                                EST. TRAVEL TIME
                            </p>
                            <p className="font-bellefair text-3xl text-center">
                                {place?.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Destination;
