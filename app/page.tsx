import Navbar from './components/navbar/Navbar';
import Hero from './(pages)/Hero';

function Home() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen-max m-auto bg-hero-mobile bg-cover tablet:bg-hero-tablet desktop:bg-hero-desktop">
            <Navbar />
            <Hero />
        </div>
    );
}
export default Home;
