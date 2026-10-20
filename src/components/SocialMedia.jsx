import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { personalInfo } from '../portfolioData';
import '../styles/SocialMedia.css';

const SocialMedia = () => {
    const socialLinks = [
        { icon: <FaGithub size={18} />, url: personalInfo.github, label: "GitHub" },
        { icon: <FaLinkedinIn size={18} />, url: personalInfo.linkedin, label: "LinkedIn" },
        { icon: <FaEnvelope size={18} />, url: `mailto:${personalInfo.email}`, label: "Email" },
        { icon: <FaCalendarAlt size={18} />, url: personalInfo.calendar, label: "Schedule Call" }
    ];

    return (
        <div className="social-icons-wrapper flex flex-wrap gap-3 mt-6 mb-8">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label={social.label}
                    title={social.label}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
