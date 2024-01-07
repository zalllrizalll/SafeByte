import React from "react";
import logo from '../assets/logo.png';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className="space-y-4 mb-8">
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center" /><span className="text-[#263238]">Safe<span className="text-brandPrimary">Byte.</span></span></a>
                    <div>
                        <p className="mb-2 text-neutralGrey">Copyright © 2024 Universitas Dian Nuswantoro.</p>
                        <p className="text-neutralGrey">All rights reserved</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#" className="hoverable-icon">Flowbite</Footer.Link>
                        <Footer.Link href="#" className="hoverable-icon">Tailwind CSS</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#" className="hoverable-icon">Github</Footer.Link>
                        <Footer.Link href="#" className="hoverable-icon">Discord</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link href="#" className="hoverable-icon">Privacy Policy</Footer.Link>
                        <Footer.Link href="#" className="hoverable-icon">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Universitas Dian Nuswantoro™" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} className="hoverable-icon"/>
                    <Footer.Icon href="#" icon={BsInstagram} className="hoverable-icon"/>
                    <Footer.Icon href="#" icon={BsTwitter} className="hoverable-icon"/>
                    <Footer.Icon href="#" icon={BsGithub} className="hoverable-icon"/>
                    <Footer.Icon href="#" icon={BsDribbble} className="hoverable-icon"/>
                </div>
                </div>
            </div>
        </Footer>
    );
};

export default MyFooter;