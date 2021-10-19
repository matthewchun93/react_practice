import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${props=>props.color};
  margin-right: 20px;
`

const Center = styled.div`  
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}

`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FunnyChun</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam, quos expedita ut quas porro, eius nemo suscipit impedit sit cumque a quasi vel ipsam. Minus eveniet dignissimos sapiente consequatur.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}}/> 1234 road Road, South State 91234</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}}/>+1 123 123 1234</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}}/>email@email.com</ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3_3YfV4gqYUdrz4IGytANg8YOsr634bu0Q&usqp=CAU"/>
      </Right>
    </Container>
  )
}

export default Footer
