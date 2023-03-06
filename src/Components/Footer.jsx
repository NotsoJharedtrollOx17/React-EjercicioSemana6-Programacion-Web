import React from "react";
import PropTypes from 'prop-types';
import '../Styling/Footer.css';

function Footer({props}) {
    return(
        <div className="Footer">
            { props.etiquetahtml }
        </div>
    )
}

Footer.propTypes={
    etiquetahtml:PropTypes.object
}

export default Footer;