import React, { useState, useEffect } from 'react';
import './Navbar.scss';

export const Navbar = ({ icons }) => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDateTime = dateTime.toLocaleString();

    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="battery-icon" />
                <span className="clock">{formattedDateTime}</span>
            </div>
            <div className="center-section">
                {icons.map((Icon, index) => (
                    <div key={index} className="icon-container">
                        <Icon />
                    </div>
                ))}
            </div>
            <div className="right-section">
                <div className="icon-container">
                    <div className="right-icon" />
                </div>
            </div>
        </nav>
    );
};
