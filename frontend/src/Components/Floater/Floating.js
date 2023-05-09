import React from "react"
import styled, { keyframes } from "styled-components"

function Floating (){

    const Float = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(400px, 500px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const FloatingStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400px);
        animation: ${Float} 15s alternate linear infinite;

    `
    return(
        <FloatingStyled></FloatingStyled>
    )
}

export default Floating
