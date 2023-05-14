import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Gabriel Estéfono</Name>
        <Function>FullStack Developer</Function>
        <Intro>Estudante de Engenharia de Software.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="./images/foto.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}