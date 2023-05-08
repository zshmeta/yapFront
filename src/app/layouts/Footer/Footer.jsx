import React from 'react';
import './Footer.scss';
import chess from '../../assets/icons/chess.png';
const Footer = () => {
    //TODO: Add a Fonction that adds icons to the footer when opened

    return (
        <footer className="footer">
                    <img
                    className="footer-icon"
                    src={chess}
                    color="white"
                    alt="chess"
                    />
        </footer>
    );
};

export default Footer;