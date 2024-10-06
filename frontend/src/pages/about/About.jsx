import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import CountUp from 'react-countup';
import { FaLinkedin } from 'react-icons/fa'; 

import godbless from "../../assets/images/godbless.jpeg"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#impact');
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2;

      if (sectionTop < triggerPoint) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="about-us bg-gray-50">
        <section className="hero bg-green-500 text-white py-16 text-center about-image">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Connecting Farmers with Innovation</h1>
            <p className="mt-4 text-lg">
              Empowering smallholder farmers with tools, resources, and market access to improve their productivity.
            </p>
            <button className="mt-6 bg-white text-green-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </section>

        <section className="mission bg-white py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-green-500">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              Our mission is to bridge the gap between rural farmers and modern agricultural technology, helping them
              grow and thrive by offering real-time information, expert advice, and access to global markets.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="our-story bg-gray-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500">Our Story</h2>
            <p className="mt-4 text-gray-700">
              Founded in 2024, KilimoKacga was born from the belief that technology can be a game-changer for African
              farmers. Our team set out to build a platform that not only empowers farmers but also fosters sustainable
              farming practices.
            </p>
          </div>
        </section>

        {/* Our Impact Section */}
        <section id="impact" className="impact bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500">Our Impact</h2>
            <div className="flex justify-around mt-6">
              {/* Stat 1 */}
              <div className="stat bg-green-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-500">
                  {hasScrolled && (
                    <CountUp start={0} end={5000} duration={3} />
                  )}
                  +
                </h3>
                <p className="text-gray-700">Farmers Empowered</p>
              </div>

              {/* Stat 2 */}
              <div className="stat bg-green-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-500">
                  {hasScrolled && (
                    <CountUp start={0} end={25} duration={3} />
                  )}
                  %
                </h3>
                <p className="text-gray-700">Productivity Increase</p>
              </div>

              {/* Stat 3 */}
              <div className="stat bg-green-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-500">
                  {hasScrolled && (
                    <CountUp start={0} end={50} duration={3} />
                  )}
                  +
                </h3>
                <p className="text-gray-700">Community Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="our-values bg-gray-50 py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-green-500">Our Values</h2>
            <div className="flex justify-center mt-6 space-x-8">
              <div className="value bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-500">Innovation</h3>
                <p className="text-gray-700 mt-2">Leveraging cutting-edge technology for farming solutions.</p>
              </div>
              <div className="value bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-500">Sustainability</h3>
                <p className="text-gray-700 mt-2">Encouraging eco-friendly farming practices for the long term.</p>
              </div>
              <div className="value bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-500">Community</h3>
                <p className="text-gray-700 mt-2">Building a community where farmers support each other.</p>
              </div>
              <div className="value bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-500">Growth</h3>
                <p className="text-gray-700 mt-2">Empowering farmers to achieve economic growth and stability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team bg-white py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-green-500">Meet the Team</h2>
            <div className="flex justify-center mt-6 space-x-8">
              <div className="team-member">
                <img
                  src={godbless}
                  alt="Godbless Nyagawa"
                  className="w-36 h-36 rounded-full border-4 border-purple-600 transform transition-transform duration-300 hover:scale-105 mx-auto"
                />
                <h3 className="text-xl font-bold text-green-500 mt-4">Godbless Nyagawa</h3>
                <p className="text-gray-700">Founder & CEO</p>
                <a href="https://www.linkedin.com/in/godbless-nyagawa/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-green-500 mt-2 w-6 h-6 mx-auto" />
                </a>
              </div>
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold text-green-500 mt-4">Jane Doe</h3>
                <p className="text-gray-700">CTO</p>
                <a href="https://www.linkedin.com/in/jane-doe/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-green-500 mt-2 w-6 h-6 mx-auto" />
                </a>
              </div>
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold text-green-500 mt-4">John Smith</h3>
                <p className="text-gray-700">Head of Marketing</p>
                <a href="https://www.linkedin.com/in/john-smith/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-green-500 mt-2 w-6 h-6 mx-auto" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta bg-green-500 text-white py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Join Us in Empowering Farmers</h2>
            <p className="mt-4">Sign up today to be part of the future of agriculture.</p>
            <button className="mt-6 bg-white text-green-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
              <Link to={"/auth/register"}>Sign Up Today</Link>
            </button>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
