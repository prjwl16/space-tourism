import { Item } from '@/app/props/NavProps';
import Link from 'next/link';

interface ComponentProps {
    items: Item[];
    onTabChange: (item: Item) => void;
}

function MiniNavbar({ items, onTabChange }: ComponentProps) {
    return (
        <div className="navitems flex gap-7 desktop:gap-12 h-8 desktop:pb-12">
            {items.map((key, index) => (
                <ul key={index}>
                    <p
                        className="text-sm font-normal tracking-wider font-barlowCondensed tablet:text-lg tablet:tracking-widest"
                        onClick={() => onTabChange(key)}
                    >
                        {key.name}
                    </p>
                </ul>
            ))}
        </div>
    );
}
export default MiniNavbar;
