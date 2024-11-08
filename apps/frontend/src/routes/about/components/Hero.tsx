import heroImage from '../../../assets/photos/wave.jpg';

export function Hero() {
    return (
        <section
            className="w-[100vw] h-[75vh] bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-start text-white px-4">
                <h1 className="text-4xl md:text-[6rem] md:leading-[8rem] font-bold ">Hi,</h1>
                <h1 className="text-4xl md:text-[6rem]  md:leading-[8rem] font-bold ">
                    I'm Bryce.
                </h1>
                <h1 className="text-4xl md:text-[6rem] md:leading-[8rem] font-bold ">
                    Full Stack Web Developer
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl  mb-8">
                    I am a web developer based in Reno NV and I specialize in building complex,
                    high-performance front end applications. I'm passionate about seamless user
                    experiences, outdoor sports, and photography.
                </p>
            </div>
        </section>
    );
}
