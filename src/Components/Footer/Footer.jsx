import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../../../assets/LinkedIn.svg'
import Twitter from '../../../assets/Twitter.svg'
import Github from '../../../assets/Github.svg'

const Footer = () => {
    return (
        <footer className="footer bg-lightGrayishBlue py-8 mt-4  items-center px-4 md:px-32">
            <div className="pb-4 md:flex justify-between items-center">
                <nav className=" ">
                    <ul className="list-none flex flex-col md:flex-row md:justify-between text-center gap-4 items-center">
                        <li className="text-veryDarkBlue hover:text-desaturatedBlue  cursor-pointer font-bold"><Link to="/">DOCS HUB</Link></li>
                    </ul>
                </nav>
                <div className='flex justify-center md:justify-normal mt-4 md:mt-0'>
                    <ul className="list-none flex flex-col md:flex-row md:justify-between text-center  gap-4 items-center">
                        <li className="text-veryDarkBlue  hover:text-desaturatedBlue  cursor-pointer font-bold"><Link to="/unsplash">UNSPLASH</Link></li>
                        <li className="text-veryDarkBlue  hover:text-desaturatedBlue  cursor-pointer font-bold"><Link to="/rickandmorty">RICK AND MORTY</Link></li>
                    </ul>
                </div>
                <div className="social flex gap-8 items-center justify-center md:justify-normal pt-5 md:pt-0">
                    <img src={LinkedIn} alt='LinkedIn logo' />
                    <img src={Twitter} alt='Twitter logo' />
                    <img src={Github} alt='Github logo' />
                </div>
            </div>
            <div className=" justify-center text-center">
                <p className='text-veryDarkBlue font-bold font-Raleway'>&copy; 2024 Docs Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
