import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const InputText = styled.h2`
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 600px;
    height: 50px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

`

const Formu = styled.form`
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
`

const MesageArea = styled.input`
    margin-top: 20px;
    width: 600px;
    height: 100px;
    border-radius: 10px;
    decoration: none;
    border: 1px solid #ccc;


`

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 30px;
    color: #fff;
    background-color: #00AAFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0088FF;
    }
`



const Form = () => {
  return (
    <Container id='form-scroll'>
    <Content>
        <Formu action="https://formsubmit.co/590aea65f7281ec105cc650e87bedfcd" method="POST">
            <InputText>CONTACTO</InputText>
            <Input placeholder='Nombre' name='name' />
            <Input placeholder='Email' name='email' />
            <MesageArea placeholder='Mensaje' name='mensaje'/>
            <Button> <SendIcon/> </Button>
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_captcha" value="false" />

        </Formu>
     </Content>   
    
    </Container>
  )
}

export default Form