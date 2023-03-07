import { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Body.css';

//componente en forma de clase
class Body extends Component {
    render () {
        function alertButton() {
            return alert("Presionaste el botón");
        }
        
        return (
            <div className='Body'>
                <p>{this.props.practica}</p>
                {
                    <ol>
                       {this.props.temas.map((t,i)=><li key={i}>{t}</li>)} 
                    </ol>
                }
                <Button onClick={()=>alertButton()} variant="secondary">Botón</Button>
            </div>
        );
    }
}

Body.propTypes={
    practica:PropTypes.string.isRequired,
    temas:PropTypes.array
}


export default Body;