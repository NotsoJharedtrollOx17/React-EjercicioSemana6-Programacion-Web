import React from "react";
import PropTypes from 'prop-types';
import '../Styling/Footer.css';

function Footer({etiquetahtml}) {
    return(
        <div className="Footer">
            { etiquetahtml }
        </div>
    )
}

Footer.propTypes={
    etiquetahtml:PropTypes.object
}

export default Footer;