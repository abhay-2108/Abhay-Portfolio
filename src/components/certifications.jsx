import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/certifications.css';
import IBM from '../assets/IBM.jpg';
import AWS from '../assets/AWS.jpg';

const certificationsData = [
  {
    image: IBM,
    title: 'GEN AI using IBM Watsonx',
    organization: 'IBM',
    date: '2024'
  },
  {
    image: AWS,
    title: 'Generative AI using Diffusion Models',
    organization: 'Amazon Web Services',
    date: '2024'
  },
];

const Certifications = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="certifications-section py-24" id="certifications">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <h2 className="section-title text-gradient inline-block">Certifications</h2>
          <p className="section-subtitle mt-4 text-white/60">Verified expertise in cutting-edge technologies</p>
        </motion.div>

        <div className="cert-grid grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center justify-items-center">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="cert-card-v2 glass rounded-[2.5rem] group cursor-pointer"
              onClick={() => setModalImg(cert.image)}
            >
              <div className="cert-image-container relative aspect-[4/3] w-full mb-8 overflow-hidden rounded-2xl bg-white shadow-inner">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
              </div>
              <div className="cert-info">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{cert.organization}</span>
                <h3 className="text-2xl font-space font-bold mt-3 text-white group-hover:text-primary transition-colors leading-tight">{cert.title}</h3>
                <p className="text-white/40 text-sm mt-4 font-medium tracking-wide">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setModalImg(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={modalImg}
              alt="Certification"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
            <button className="absolute top-8 right-8 text-white text-3xl">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;