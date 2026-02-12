import React from 'react';
import { FaGithub, FaLinkedinIn, FaGoogle, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import '../styles/SocialMedia.css'; // Keep it but I'll empty it out to avoid conflicts

const SocialMedia = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/abhay-2108", label: "GitHub" },
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/abhay-tiwari-814051290/", label: "LinkedIn" },
        { icon: <FaGoogle />, url: "mailto:abhaytiwari0821@gmail.com", label: "Email" },
        { icon: <FaPhoneAlt />, url: "tel:9959387944", label: "Phone" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/abhayraj_0120/", label: "Instagram" }
    ];

    return (
        <div className="social-icons-wrapper flex flex-wrap gap-4 md:gap-6 mt-12 mb-10">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn glass border border-white/10 text-white/70 hover:text-white hover:bg-primary hover:border-primary transform hover:scale-110 active:scale-95"
                    aria-label={social.label}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
