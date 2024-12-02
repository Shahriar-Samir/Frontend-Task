import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer">
        <section className="footer-link-containers">
          <div className="footer-link-container">
            <h1>Categories</h1>
            <div className="links">
              <p>Nutrition and diet</p>
              <p>Fitness training</p>
              <p>Mindfulness</p>
              <p>Mental health</p>
              <p>Personal growth</p>
              <p>Social well-being</p>
            </div>
          </div>
          <div className="footer-link-container">
            <h1>About</h1>
            <div className="links">
              <p>About us</p>
              <p>Our partners</p>
              <p>Investors</p>
              <p>Career</p>
            </div>
          </div>
          <div className="footer-link-container">
            <h1>Categories</h1>
            <div className="links">
              <p>FAQ</p>
              <p>Refund policies</p>
              <p>Terms and conditions</p>
              <p>Cookie</p>
              <p>Latest posts</p>
            </div>
          </div>
          <div className="footer-link-container">
            <h1>Support</h1>
            <div className="links">
              <p>Get in touch</p>
              <p>Visit our forum</p>
            </div>
          </div>
        </section>
        <section className="social-links">
          <h1>Join our official channels</h1>
          <div className="icons">
            <Image
              alt=""
              height={50}
              width={50}
              className="icon"
              src="/icons/insta.png"
            />
            <Image
              alt=""
              height={50}
              width={50}
              className="icon"
              src="/icons/x.png"
            />
            <Image
              alt=""
              height={50}
              width={50}
              className="icon"
              src="/icons/facebook.png"
            />
            <Image
              alt=""
              height={50}
              width={50}
              className="icon"
              src="/icons/discord.png"
            />
          </div>
        </section>
        <p className="copyright">© 2024 EduPath. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
