import { Item } from '@/app/props/NavProps';
import Link from 'next/link';

interface ComponentProps {
    items: Item[];
}

function NavItem({ items }: ComponentProps) {
    return (
        <div className="navitems flex gap-9 desktop:gap-12">
            {items.map((key, index) => (
                <ul key={index}>
                    <Link
                        href={key.link}
                        className="font-barlowCondensed text-base font-normal"
                    >
                        {' '}
                        <span className="max-desktop:hidden">
                            {key.prefix}
                        </span>{' '}
                        {key.name}
                    </Link>
                </ul>
            ))}
        </div>
    );
}
export default NavItem;
