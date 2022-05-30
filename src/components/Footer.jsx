
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    background-color: #eee;

    ${mobile({ flexDirection: "column"})}
    }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.h1`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`



const Center = styled.div`
    flex: 1;
    padding: 20;
    ${mobile({ display: "none"})}
    }
`

const Title= styled.h3`
    margin-bottom:  30px;
    margin-top: 20px;
`

const List =  styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20;
    ${mobile({ backgroundColor: "#fff8f8"})}
    }

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 150px;
    height: 50px;
    margin-top: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>YOUR BUISINES</Logo>
          <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique iste dolores laborum ex excepturi perspiciatis hic quaerat vero accusamus obcaecati. Sint illum velit cum ullam sit earum animi accusamus. Ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perspiciatis vitae inventore ducimus quos id nobis natus aut in, minima deserunt qui distinctio, aperiam dicta. Unde harum voluptate quaerat deserunt.
          </Desc>
          {/* <SocialContainer>
            <SocialIcon color= "E4405F">
                <Instagram/>
            </SocialIcon> 
            <SocialIcon color= "55ACEE">
                <Twitter/>
            </SocialIcon> 
          </SocialContainer>    */}
          
      </Left>
      <Center>

          <Title>Links</Title>
          <List>
              <ListItem>Inicio</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Moda hombre</ListItem>
              <ListItem>Moda mujer</ListItem>
              <ListItem>Accesorios</ListItem>
              <ListItem>Mi cuenta</ListItem>
              <ListItem>Pedidos</ListItem>
              <ListItem>Lista de deseos</ListItem>
              <ListItem>Terms</ListItem>


          </List>
      </Center>
      {/* <Right>

          <Title>Contact</Title>
          <ContactItem><LocationOn style={{marginRight:"10px"}}/>
              Asturias, Gijón
          </ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/>
            vansityinfo@gmail.com
          </ContactItem>
          <Payment src="https://github.com/Arturo0596/fraktels-web/blob/master/src/toppng.com-help-keep-this-web-page-info-going-we-accept-payment-icons-525x158.png?raw=true" />
      </Right> */}
    </Container>
  )
}

export default Footer
