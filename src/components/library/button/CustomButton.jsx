import styled, { css } from 'styled-components'

const invertedBtn = css`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
        background-color: #000;
        color: #000;
        border: none;
    }
`

const googleBtn = css`
    background-color: #4285f4;
    color: #fff;

    &:hover {
        background-color: #357ae8;
        color: #fff;
        border: none;
    }
`

const getBtnStyles = props => {
    if (props.isGoogleSignIn) {
        return googleBtn
    } else if (props.inverted) {
        return invertedBtn
    }
}

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }

    ${getBtnStyles}
`