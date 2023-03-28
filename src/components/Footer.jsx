import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white">Sign UP for Newletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact US</h4>
              <div>
                <address className="text-white fs-6">
                  DiaChi: SongAn, VuThu, <br />
                  ThaiBinh, VietNam
                  <br />
                  PinCode: 000001,
                </address>
                <a
                  href="tel: +84 355794997"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +84 355794997
                </a>
                <a
                  href="mailto:longkhieu10@gmail.com"
                  className="mt-4 d-block mb-0 text-white"
                >
                  longkhieu10@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="https://github.com/KhieuLong" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="https://github.com/KhieuLong" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="https://github.com/KhieuLong" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="https://github.com/KhieuLong" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Licks</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">LapTop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="containel-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Long Khieu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
