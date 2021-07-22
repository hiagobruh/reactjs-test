import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import landingImage from '../../assets/images/landing.png'
import storyIcon from '../../assets/icons/story.svg'
import heroIcon from '../../assets/icons/hero.svg'
import creatorIcon from '../../assets/icons/creator.svg'

const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-secundary);
`

const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'introduction landing landing' 'buttons buttons buttons';
  }
`

const IntroductionContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    grid-area: introduction;
    align-self: center;
    margin: 0;
  }
`

const SiteTitle = styled.h1`
  color: var(--color-title-in-primary);
  font-size: 5rem;

  @media (min-width: 1100px) {
    text-align: initial;
  }
`

const SiteDescription = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
`

const LandingImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: landing;
    justify-self: end;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    margin: 8rem 0;
  }
`

const LinkToPage = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;

  background: var(--color-primary);

  &:hover {
    background: var(--color-primary-dark);
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`

const LinkIconImage = styled.img`
  width: 4rem;
  margin-right: 1.5rem;
`

function LandingView() {
  return (
    <PageLanding>
      <PageLandingContent>
        <IntroductionContainer>
          <SiteTitle>Startec ReactJS Test</SiteTitle>
          <SiteDescription>
            Desafio de criação de uma aplicação utilizando a biblioteca React consumindo a API
            Marvel
          </SiteDescription>
        </IntroductionContainer>

        <LandingImage src={landingImage} alt='Plataforma de estudos' />

        <ButtonsContainer>
          <LinkToPage to='/characters'>
            <LinkIconImage src={heroIcon} alt='Personagens' />
            Personagens
          </LinkToPage>

          <LinkToPage to='/stories'>
            <LinkIconImage src={storyIcon} alt='Histórias' />
            Histórias
          </LinkToPage>

          <LinkToPage to='/creators'>
            <LinkIconImage src={creatorIcon} alt='Criadores' />
            Criadores
          </LinkToPage>
        </ButtonsContainer>
      </PageLandingContent>
    </PageLanding>
  )
}

export default LandingView
