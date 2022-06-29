import React from "react";
import { Link } from 'react-router-dom';

function Button({mailTo}) {
    return(
        <Link className="nav-links" to='#' onClick={(e) => {
            window.location.href = mailTo;
            e.preventDefault();
        }}>
            <i className="far fa-envelope"></i>
        </Link>
    )
}

export default Button