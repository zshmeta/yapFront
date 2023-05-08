import React from 'react';
import './Sidebar.scss';
import mail from '../../assets/icons/mail.png';
import boy from '../../assets/icons/boy.png';
import folderFav from '../../assets/icons/folder.png';
import bookmarkFav from '../../assets/icons/bookmark-fav.png';
import bulb from '../../assets/icons/bulb.png';
import chatBubble from '../../assets/icons/chat-bubble.png';
import clock from '../../assets/icons/clock.png';
import figma from '../../assets/icons/figma.png';
import location from '../../assets/icons/location.png';

const Sidebar = () => {
    const icons = [
        { src: clock, alt: 'Clock' },

        { src: mail, alt: 'Mail' },
        { src: boy, alt: 'Boy' },
        { src: folderFav, alt: 'Favorite Folder' },
        { src: bookmarkFav, alt: 'Favorite Bookmark' },
        { src: bulb, alt: 'Bulb' },
        { src: chatBubble, alt: 'Chat Bubble' },
        { src: figma, alt: 'Figma' },
        { src: location, alt: 'Location' },
    ];

    return (
        <div className="sidebar">
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="sidebar-icon"


                />
            ))}
        </div>
    );
};

export default Sidebar;
// /
// /
// class Sidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             iconsToShow: ['user', 'briefcase', 'envelope', 'calculator'],
//         };
//     }
//     render() {
//
//     return (
//         <nav className={ styles.sidebar }>
//             {icons.map((icon) => {
//                 return (
//                     icon.visible && (
//                         <div key={icon.name} className={ styles.sideItem }>
//                             <i className={icon.iconClass} aria-hidden="true"></i>
//                         </div>
//                     )
//                 );
//             })}
//         </nav>
//     );
//     }
// }
//
// export default Sidebar;
//
