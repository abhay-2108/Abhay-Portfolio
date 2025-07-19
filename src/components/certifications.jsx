import React, { useState } from 'react';
import '../styles/certifications.css';
import IBM from '../assets/IBM.jpg';
import AWS from '../assets/AWS.jpg';

const certifications = [
  {
    image: IBM,
    title: 'GEN AI using IBM Watsonx',
    organization: 'IBM'
  },
  {
    image: AWS,
    title: 'Generative AI using Diffusion Models',
    organization: 'Amazon Web Services'
  },
  // Add more certificates as needed
];

const Certifications = () => {
  const [modalImg, setModalImg] = useState(null);
  const handleImgClick = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="cert-title">Certificates</h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            {cert.image && (
              <div className="cert-card-img-wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-card-img"
                  onClick={() => handleImgClick(cert.image)}
                  style={{ cursor: 'zoom-in' }}
                  tabIndex={0}
                  aria-label={`View full certificate: ${cert.title}`}
                />
              </div>
            )}
            <div className="cert-card-title">{cert.title}</div>
            <div className="cert-card-org">{cert.organization}</div>
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="cert-modal-overlay" onClick={closeModal} tabIndex={0}>
          <img src={modalImg} alt="Full certificate" className="cert-modal-img" />
        </div>
      )}
    </section>
  );
};

export default Certifications; 