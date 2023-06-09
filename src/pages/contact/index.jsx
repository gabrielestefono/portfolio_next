import React from 'react'
import { Container, Content } from '../../styles/ContactStyle'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from './../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/gabrielestefono" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/estefono.kaleidos" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/estefono.kaleidos/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="gabrielestefono@hotmail.com" 
        />
      </Content>
    </Container>
  )
}