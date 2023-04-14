import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hero py-22">
      <div className=" grid md:grid-cols-3">
        <div>
          <div className="flex justify-center">
            <div className="py-4 relative">
              <div className="flex py-4"></div>
              <p className="text-center">Never miss a sale...Sign Up!</p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mx-1 w-full shadow-xl rounded-2xl text-gray-400 text-center"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <div to="/">
                    <div className="cursor-not-allowed bg-button text-center text-btnText p-2 mx-1 w-full rounded-2xl shadow-xl hover:shadow-2xl hover:bg-pink-400/50 transition-all my-2">
                      Sign up
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4 justify-center text-accent items-center">
          <button className="cursor-not-allowed bg-button text-btnText p-2 rounded-2xl shadow-4xl hover:shadow-2xl hover:bg-pink-400/50 transition-all m-4">
            <FaInstagram />
          </button>
          <button className="cursor-not-allowed bg-button text-btnText p-2 rounded-2xl shadow-4xl hover:shadow-2xl hover:bg-pink-400/50 transition-all m-4">
            <FaTiktok />
          </button>
          <button className="cursor-not-allowed bg-button text-btnText p-2 rounded-2xl shadow-4xl hover:shadow-2xl hover:bg-pink-400/50 transition-all m-4">
            <FaFacebookF />
          </button>
        </div>
        <div className="flex justify-evenly w-full uppercase items-center my-8">
          <div>
            <h2 className="font-bold cursor-default">Support</h2>
            <ul>
              <li className="cursor-not-allowed text-sm py-2">Help Center</li>
              <li className="cursor-not-allowed text-sm py-2">Contact Us</li>
              <li className="cursor-not-allowed text-sm py-2">API Status</li>
              <li className="cursor-not-allowed text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold cursor-default">Info</h2>
            <ul>
              <li className="cursor-not-allowed text-sm py-2">About Us</li>
              <li className="cursor-not-allowed text-sm py-2">Careers</li>
              <li className="cursor-not-allowed text-sm py-2">Invest</li>
              <li className="cursor-not-allowed text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
