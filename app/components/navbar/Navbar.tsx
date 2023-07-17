import Image from 'next/image';
import logo from '@/public/logo.svg';
import ham from '@/public/ham.svg';
import NavItem from './NavItems';

const items = [
    {
        prefix: '00',
        name: 'HOME',
        link: '/',
    },
    {
        prefix: '01',
        name: 'DESTINATION',
        link: '/',
    },
    {
        prefix: '02',
        name: 'CREW',
        link: '/',
    },
    {
        prefix: '03',
        name: 'TECHNOLOGY',
        link: '/',
    },
];

function Navbar() {
    const onTabChange = () => {};

    return (
        <div className="flex justify-between items-center box-border p-4 desktop:px-8 desktop:mt-6">
            {/* <div className="navDiv h-20 flex justify-between items-center max-tablet:hidden absolute right-0 pr-10"></div> */}
            <div className="logo">
                <Image src={logo} alt="logo" />
            </div>
            <div className="hamburger tablet:hidden">
                <Image src={ham} alt="ham" />
            </div>
            <div className="navItems hidden tablet:block">
                {/* suppress this error */}
                <NavItem items={items} />
            </div>
        </div>
    );
}
export default Navbar;
