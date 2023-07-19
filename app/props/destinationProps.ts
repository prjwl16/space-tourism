import { StaticImageData } from 'next/image';

export interface Destination {
    place: string;
    description: string;
    distance: string;
    image: StaticImageData;
    time: string;
}
