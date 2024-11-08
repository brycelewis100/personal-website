import heroImage from '../../../assets/photos/mountain.jpg';

export function ContactHero() {
    return (
        <section
            className="w-[100vw] h-[50vh] bg-cover bg-bottom flex items-center justify-center relative"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            <div className="relative z-10 text-start text-white px-4">
                <h1 className="text-4xl md:text-[6rem] md:leading-[8rem] font-bold ">
                    Let's get in touch
                </h1>
            </div>
        </section>
    );
}
