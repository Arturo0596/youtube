import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    

    `

const Img = styled.img`
    width: 600px;
    height: 500px;
    display: flex;
    flex: start;
    justify-content: center;
    align-items: center;
    align-self: center;



`

const Parrafo = styled.p`
    display: flex;
    font-size: 30px;
    positon: absolute;
    flex-direction: row;
    text-align: center;
    margin-bottom: 100px;
    
    
    
`

const Button = styled.button`
    background-color: #00AAFF;
    padding: 0px 0px;
    height: 50px;
    width: 200px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    &:hover {
        background-color: #0088FF;
        
    }
    
`

const ContB = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    align-self: center;

`

const Svg = styled.svg`
    display: flex;
    
    position: relative;
    top: 50px;
margin-top: -100px;
`

const Contall = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 100px;
`

const Info = () => {
  return (
    <Container id='quien' >

    <Contall>  
        <Img src="https://internacional.emprenemjunts.es/fotos/80307_foto.png" />

    <ContB>
        <Parrafo >Este es el parrafo si quieres <br/> ponerte en contacto
         </Parrafo>
         
         <Button>Contacto</Button>
    </ContB>
    </Contall>  
         <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path></Svg>
    </Container >
  )
}

export default Info
