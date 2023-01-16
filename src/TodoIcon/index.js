import React from "react";
import { FcPlus, FcDeleteRow } from "react-icons/fc";
import './TodoIcon.css';

const iconTypes = {
    "check": color => (
        <FcPlus className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <FcDeleteRow className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick}) {
    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};