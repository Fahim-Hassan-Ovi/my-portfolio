import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Md. Fahim Hassan Ovi
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#24eca0] leading-tight">
                        <span className="text-white">I am a </span>

                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer', 2000,
                                'MERN Stack Developer', 2000,
                                'Coder', 2000,
                                'AI Automation Developer', 2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            style={{ color: '#24eca0' }}
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I’m a Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. I specialize in the MERN stack and enjoy working across both front-end and back-end to create seamless digital experiences. Alongside web development, I’m exploring AI automation using n8n, integrating intelligent workflows that connect tools, APIs, and AI models to make processes smarter and more efficient.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1B0-nh_ic6gDKib5kCk2hveEZAPf1tjM_/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #24eca0, #00b47a)',
                            boxShadow: '0 0 2px #24eca0, 0 0 5px #24eca0, 0 0 10px #24eca0',
                        }}

                    >
                        DOWNLOAD CV
                    </a>

                </div>
                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#00FF9C] rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="Md. Fahim Hassan Ovi"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(36,180,160,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;
