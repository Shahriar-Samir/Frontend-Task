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
        </section>
        <section className="social-links">
          <h1>Join our official channels</h1>
        </section>
        <p className="copyright">© 2024 EduPath. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
