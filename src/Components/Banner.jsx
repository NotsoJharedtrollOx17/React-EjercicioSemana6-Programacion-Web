import React from "react";
import PropTypes from 'prop-types';
import '../Styling/Banner.css'

//Componente tipo Función
function Banner({texto}){
    return(
        <div className="Banner">
            {texto}
        </div>
    )
}

//Uso de PropTypes
Banner.propTypes={
    texto:PropTypes.string.isRequired
}

//Uso de defaultPros
Banner.defaultProps={
    texto:"Hola mundo"
}

export default Banner;