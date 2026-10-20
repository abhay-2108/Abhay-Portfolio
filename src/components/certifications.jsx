import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaTimes, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import { certifications } from '../portfolioData';
import IBM from '../assets/IBM.jpg';
import AWS from '../assets/AWS.jpg';
import '../styles/certifications.css';

const Certifications = () => {
  const [activeModalImg, setActiveModalImg] = useState(null);

  // Map local certificate assets
  const certAssets = {
    "IBM": IBM,
    "Amazon Web Services (AWS)": AWS
  };

  return (
    <section className="certifications-section py-24 relative" id="certifications">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            <FaAward /> Verified Industry Credentials
          </div>
          <h2 className="section-title text-gradient inline-block">
            Certifications & Specializations
          </h2>
          <p className="section-subtitle mt-4 text-slate-400 max-w-2xl mx-auto">
            Accredited credentials in generative foundation models, diffusion architectures, and computational data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => {
            const hasImage = certAssets[cert.organization];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-violet-400 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                      {cert.organization}
                    </span>
                    <span className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1 font-semibold">
                      <FaShieldAlt size={10} /> {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-space text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono-code text-slate-500">
                    Issued: {cert.year}
                  </span>

                  {hasImage && (
                    <button
                      onClick={() => setActiveModalImg(hasImage)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-code font-semibold text-violet-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <FaCertificate size={12} />
                      View Certificate Image
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for viewing certificate image */}
        <AnimatePresence>
          {activeModalImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveModalImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-3xl w-full bg-[#101018] rounded-2xl p-4 border border-white/10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                  <span className="text-xs font-mono-code text-slate-400">Verified Certificate Document</span>
                  <button
                    onClick={() => setActiveModalImg(null)}
                    className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
                <img
                  src={activeModalImg}
                  alt="Verified Certificate"
                  className="w-full max-h-[75vh] object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;