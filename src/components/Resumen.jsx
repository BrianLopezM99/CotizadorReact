import React, {Fragment} from 'react'
import styled from '@emotion/styled'
import {primerMayuscula} from '../Helper'
const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838f;
color: #fff;
margin-top: 1rem;
`;
const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;
    if(marca === '' || year === '' || plan === '')
    return null;
    return ( 
        <ContenedorResumen>
        <h2>Resumen Cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>Año: {primerMayuscula(year)} </li>
            </ul>
        </ContenedorResumen>
     );  
}

 
export default Resumen;