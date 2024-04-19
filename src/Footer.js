import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        {/* Footer contents following the layout from the image */}
        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li>Home</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>25 W 51st St, New York, NY 10019</p>
          <p>Call Us: 212.262.3200</p>
        </div>
        {/* Add social links */}
        <div className="footer-column">
          <h4>Social Links</h4>
          {/* Include social media icons */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
