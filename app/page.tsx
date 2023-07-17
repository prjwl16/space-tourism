export default function Home() {
    return (
        <main className="main flex flex-col justify-center items-center w-full flex-grow box-border desktop:flex-row desktop:justify-evenly">
            <div className="desc flex flex-col m-4 justify-center items-center desktop:justify-start desktop:items-start">
                <p className="text-nav font-thin tracking-widest leading-6 tablet:text-body desktop:text-h5">
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <p className="font-bellefair text-mobh1 max-w-md tablet:text-h1 tablet:leading-heading desktop:text-h1 desktop:my-6 desktop:-tracking-tighter">
                    SPACE
                </p>
                <p className="font-thin leading-6 text-center max-w-md tablet:leading-body desktop:text-body desktop:w-96 desktop:text-left desktop:p-0">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div className="image h-36 w-36 bg-white rounded-full mt-20 flex items-center tablet:w-64 tablet:h-64 desktop:w-72 desktop:h-72 desktop:m-0 transition-all ease-in">
                <button className="text-center m-auto text-black font-bellefair text-lg desktop:text-2xl ">
                    EXPLORE
                </button>
            </div>
        </main>
    );
}
