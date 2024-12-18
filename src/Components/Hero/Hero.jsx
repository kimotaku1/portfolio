import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumeFile from '../../assets/Bibek_Bhandari_cv.pdf'

const Hero = () => {
  return (
    <div id="home" className="flex flex-col items-center gap-6 md:gap-9 px-4 md:px-8 mx-6">
      <img
        src={profile_img}
        alt="Profile"
        className="w-32 h-32 md:w-64 md:h-64 lg:mt-24 mt-14 rounded-full"
      />
      <h1 className="text-center text-4xl md:text-6xl font-semibold leading-tight">
        <span className="bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] bg-clip-text text-transparent">
          I'm Bibek Bhandari,
        </span>{" "}
        Web developer.
      </h1>
      <p className="text-center w-full md:w-3/4 lg:w-1/2 text-lg leading-8 text-gray-300">
        I am a Web developer with 2 years of experience using React and
        NodeJS. I am passionate about using technology to solve real-world
        problems and aim to become a full-stack developer. Reach out if you'd
        like to learn more!
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-medium mb-12">
        <div className="w-44 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center">
          <AnchorLink className="text-white" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        {/* Resume download button */}
        <a
          href={resumeFile} // Replace with your actual file path
          download="Bibek_Bhandari_cv.pdf" // Suggested download file name
          className="px-8 py-3 rounded-full border-2 border-white cursor-pointer hover:border-purple-500 transition-colors duration-300 text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
