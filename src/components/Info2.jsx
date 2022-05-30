import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: #0099ff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    position: relative;
    flex-wrap: wrap;
    top: 0px;

    

`

const Title = styled.h1`
    font-size: 50px;
    color: #fff;
    text-align: center;
`

const ContTitle = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
`

const ContP = styled.div`
    display: flex;
    width: 40%;
    height: 70%;
    align-items: start;
    justify-content: center;
    margin: 40px ;
    margin-top: 150px;
`

const Parrafo = styled.p`
    font-size: 30px;
    color: #fff;
    text-align: start;

`

const Img = styled.img`
    display: flex;
    width: 600px;
    height: 500px;


`

const ContImg = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
`

const ContF = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;
    justify-content: space-around;
`

const Info2 = () => {
  return (
    <Container>
        <ContTitle>
            <Title>
                QUIENES SOMOS
            </Title>
        </ContTitle>
    <ContF>
        <ContP>
            <Parrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, doloribus fugiat vitae cumque dolore magni dignissimos provident blanditiis sequi atque nisi qui quae quia autem ullam modi sunt tempora aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid hic architecto laboriosam sed in dolorum itaque beatae assumenda. Tenetur eaque iste voluptatum blanditiis eos molestias architecto accusantium explicabo minima.
            </Parrafo>
        </ContP>
        
            <Img src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?cs=srgb&dl=pexels-antoni-shkraba-4348404.jpg&fm=jpg" alt=""/>
    </ContF>
    </Container>
  )
}

export default Info2
