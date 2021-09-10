import React from 'react';
import './Background.scss';

const Background = ({children}) => {
    return (
        <div className = "Background">
            <img alt = {"background"} src = {"/img/background.png"} />
            <div className = "content">{children}</div>
        </div>
    );
};

export default Background;