import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const Container = styled.div`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    overflow-x: hidden;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`

const A = styled.a`
    margin-right: 40px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #5B5B5B;
    }
    
`

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;


`

const Contac = styled.a`
    background-color: #00AAFF;
    padding: 10px 30px;
    border-radius: 5px;
    color: #fff;

    &:hover {
        background-color: #0088FF;
    }

`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
`

const Logo = styled.div`
    font-size: 30px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Left>
        <Link to='quien' spy={true} smooth={true} offset={10} duration={500} >    
    
            <Logo>Navbar</Logo>
        </Link>
        </Left>
        <Right>
            <Link to='quien' spy={true} smooth={true} offset={800} duration={500} >
                <A>Quienes somos</A>

                </Link>
        <Link to='3' spy={true} smooth={true} offset={10} duration={500} >    

            <A>Que hacemos</A>
        </Link>
        <Link to='form-scroll' spy={true} smooth={true} offset={10} duration={500} >    
            <Contac>Contactar</Contac>
        </Link>
            
        </Right>
    </Container>
    )
}

export default Navbar