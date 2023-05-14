import React from 'react';
import styles from './Loader.module.scss';


const Loader = () => {
    return (
        <svg className={styles.loader} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 240 240" enableBackground="new 0 0 240 240" xmlSpace="preserve">
            <defs>
                <path id="path1" d="M180.3,103.7C193.9,145.6,69.7,179.9,60,137C46.3,95.1,170.5,60.7,180.3,103.7z"/>
                <path id="path2" d="M113.5,89.1c79.8-2.3,101.5,66.1,14.4,66.8C48.1,158.4,26.4,90,113.5,89.1z"/>
                <path id="path3" d="M169.1,123.5c-11.9,44-126.5,79.8-98.2-6.9C82.8,72.6,197.4,36.8,169.1,123.5z"/>
                <path id="path4" d="M59.8,136.3C46.2,94.4,170.4,60.1,180.1,103C193.8,144.9,69.6,179.3,59.8,136.3z"/>
                <path id="path5" d="M126.6,150.9c-79.8,2.3-101.5-66.1-14.4-66.8C192,81.6,213.7,150,126.6,150.9z"/>
                <path id="path6" d="M71,116.5c11.9-44,126.5-79.8,98.2,6.9C157.3,167.4,42.7,203.2,71,116.5z"/>
            </defs>

            <path strokeWidth="5" id="lower" className="st0" d="M160,120c0,22.1-17.9,40-40,40s-40-17.9-40-40"/>
            <g id="asteroids" strokeWidth="2">
                <circle r="9"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path1"/></animateMotion></circle>
                <circle r="8"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path2"/></animateMotion></circle> 
                <circle r="5"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path3"/></animateMotion></circle> 
                <circle r="9"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path4"/></animateMotion></circle>
                <circle r="7"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path5"/></animateMotion></circle>
                <circle r="6"><animateMotion dur="3s"  repeatCount="indefinite"><mpath xlinkHref="#path6"/></animateMotion></circle>
            </g>
            <path strokeWidth="5" id="upper" className="st0" d="M80,120c0-22.1,17.9-40,40-40s40,17.9,40,40"/>
            </svg>
    );
};

export default Loader;