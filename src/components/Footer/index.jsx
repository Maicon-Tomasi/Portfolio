import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2B2E48', color: '#FFFFFF', padding: '2rem 0', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: 'auto' }}>
                {/* Contato */}
                <div style={{ maxWidth: '400px', marginBottom: '1.5rem' }}>
                    <h2>Let's get in touch</h2>
                    <p>I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.</p>
                    <p><strong>Living In:</strong> 30 Shacham Street, Los Angeles, USA.</p>
                    <p><strong>Call:</strong> (+060) 444 434 444</p>
                    <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                        <FaTwitter style={{ margin: '0 0.5rem' }} />
                        <FaFacebook style={{ margin: '0 0.5rem' }} />
                        <FaInstagram style={{ margin: '0 0.5rem' }} />
                        <FaGithub style={{ margin: '0 0.5rem' }} />
                        <FaDribbble style={{ margin: '0 0.5rem' }} />
                    </div>
                </div>

                {/* Estimativa de Projeto */}
                <div style={{ maxWidth: '400px', marginBottom: '1.5rem' }}>
                    <h2>Estimate your Project?</h2>
                    <form>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Your Name:</label>
                            <input type="text" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Your Email Address:</label>
                            <input type="email" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>How can I help you?:</label>
                            <textarea style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} rows="3"></textarea>
                        </div>
                        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#333333', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>
                            Send ➔
                        </button>
                    </form>
                </div>
            </div>

            {/* Direitos Autorais */}
            <div style={{ borderTop: '1px solid #444444', padding: '1rem 0', marginTop: '2rem' }}>
                <p>Copyright © 2023 YourName. All Rights Reserved.</p>
                <p>Designed by YourDesign</p>
            </div>
        </footer>
    );
};

export default Footer;
