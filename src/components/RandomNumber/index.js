import {useState} from 'react'

import {Container,Contain,Heading,Para,Button,Paragraph} from './styledComponents'

const RandomNumber=()=>{
    const [number,setNumber]=useState(0)

    const onClickButton=()=>{
        setNumber(Math.ceil(Math.random()*100))
    }

    return(
        <Container>
            <Contain>
                <Heading>Random Number</Heading>
                <Para>Generate a random number in the range 0 to 100</Para>
                <Button onClick={onClickButton}>Generate</Button>
                <Paragraph>{number}</Paragraph>
            </Contain>
        </Container>
    )
}

export default RandomNumber