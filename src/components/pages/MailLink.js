import React from "react";
import { Link } from 'react-router-dom';

function MailLink({mailTo, label}) {
    return(
        <Link to='#' onClick={(e) => {
            window.location.href = mailTo;
            e.preventDefault();
        }} className="about-link">
            {label}
        </Link>
    )
}

export default MailLink