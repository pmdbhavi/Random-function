import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:url("https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png");
    background-size:cover;
    min-height: 100vh;
`

export const Contain=styled.div`
    background-color: white;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:0px 4px 16px 0px #eaebed;
    border-radius: 10px;
`

export const Heading=styled.div`
    color:#0b69ff;
    font-size:20px;
    font-weight:bold;
    margin:10px;
`

export const Para=styled.div`
    color:#333333;
    margin:10px;
    width:250px;
    text-align: center;
`

export const Button=styled.button`
    cursor: pointer;
    background-color: #0b69ff;
    color:white;
    border-width:0px;
    margin:10px;
    padding:10px;
    border-radius:10px;
`

export const Paragraph=styled.p`
    color:#0b69ff;
    font-size:30px;
    font-weight:bold;
`