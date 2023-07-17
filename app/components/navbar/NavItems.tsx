interface navItemsProps {
    items: [
        {
            prefix: string;
            name: string;
            link: string;
        },
    ];
    onTabChange: () => void;
}

function NavItem({ items }: navItemsProps) {
    return (
        <div className="navitems flex gap-9 desktop:gap-12">
            {items.map((key, index) => (
                <ul key={index}>
                    <a
                        href={key.link}
                        className="font-barlowCondensed text-base font-normal"
                    >
                        {' '}
                        <span className="max-desktop:hidden">
                            {key.prefix}
                        </span>{' '}
                        {key.name}
                    </a>
                </ul>
            ))}
        </div>
    );
}
export default NavItem;
