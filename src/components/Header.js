import React from 'react';
import './Header.css';
import HeaderBackgroundSVG from '../files/bg-header-desktop.svg';

const Header = () =>{
    return(
        <div id="Div_Header_JSX" className="Div_Header_CSS">
            <img className="Img_HeadrBackgroundSVG_CSS" src={HeaderBackgroundSVG} alt="Header Background SVG" />
        </div>
    );

}

export default Header;