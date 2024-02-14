import { useRef } from 'react';
import "../assets/css/Home.css";
import HomeNavbar from "../components/HomeNavbar";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../assets/images/backbanner.avif";
import BannerImage from "../assets/images/yg.gif";
import { Link } from "react-router-dom";


function Home() {
  const bannerRef = useRef(null);

  const scrollToBanner = () => {
    bannerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HomeNavbar />
      <div className="home-container">
        <div className="showcase">
          <h1 className="he">Welcome to Zencloud Yoga</h1><br/>
          <p className="subtext">
            Embark on a journey to wellness and tranquility.
          </p><br/>
          <button className="main-btn" onClick={scrollToBanner}>Get Started</button>
        </div>

        <div ref={bannerRef} className="home-banner-container">
          <div className="overlay"></div>
          <div className="home-bannerImage-container">
            <img className="ii" src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h2 className="primary-heading">
              Join Our Yoga Classes for a Healthy Mind and Body
            </h2>
            <p className="primary-text">
              Experience the benefits of yoga with our expert instructors.
              Improve your flexibility, balance, and overall well-being through
              mindful practices.
            </p>
            <Link to={"/admission"} className="secondary-button">
              Apply Now <FiArrowRight />
            </Link>
          </div>

          <div className="home-image-section">
            <img className="ib" src={BannerImage} alt="" />
          </div>
        </div>
      </div>
     
      <div className="cpyr">
        <p>&copy; Zencloud Yoga 2024</p>
      </div>
    </>
  );
}

export default Home;
