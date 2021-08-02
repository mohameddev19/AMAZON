import React, {Component} from 'react';
import styled from 'styled-components';

function Div(){

    const H = styled.h1`
        color: red;
        :hover{
            color: ${props => props.item === "black"? "black" : ""};
        }
        @media screen and (max-width: 4000px) {
            color: green;
        }
    `;

    return(
        <div>
            <H color="black">{Array(5)
            .fill()
            .map((i)=>{
                return "num ";
            })}</H>
        </div>
    )
}
export default Div;