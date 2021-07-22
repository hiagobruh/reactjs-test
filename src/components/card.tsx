import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import viewIcon from '../assets/icons/eye.svg'

export interface CardProps {
  title: string
  subtitle?: string | null
  avatarSource?: string | null
  description?: string | null
  footerInformation: {
    description: string
    value: string
  }
}

const CardWrapper = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
`

const CardHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`

const AvatarImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`

const CardHighlight = styled.div`
  margin-left: 2.4rem;
`

const CardTitle = styled.strong`
  font: 700 2.4rem Archivo;
  display: block;
  color: var(--color-text-title);
`

const CardSubtitle = styled.span`
  font-size: 1.6rem;
  display: block;
  margin-top: 0.4rem;
`

const CardDescription = styled.p`
  padding: 0 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  @media (min-width: 700px) {
    padding: 0 3.2rem;
  }
`

const CardFooter = styled.footer`
  padding: 3.2rem 2rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`

const FooterInformationValue = styled.strong`
  color: var(--color-primary);
  font-size: 1.6rem;
  display: block;

  @media (min-width: 700px) {
    display: initial;
    margin-left: 1.6rem;
  }
`

const RedirectLink = styled(Link)`
  width: 20rem;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }
`

const RedirectImage = styled.img`
  @media (min-width: 700px) {
    margin-right: 1.6rem;
  }
`

function Card({ title, subtitle, avatarSource, description, footerInformation }: CardProps) {
  return (
    <CardWrapper>
      <CardHeader>
        {avatarSource ? <AvatarImage src={avatarSource} alt={title} /> : null}
        <CardHighlight>
          <CardTitle>{title}</CardTitle>
          {subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : null}
        </CardHighlight>
      </CardHeader>

      {description ? <CardDescription>{description}</CardDescription> : null}

      <CardFooter>
        <p>
          {footerInformation.description}
          <FooterInformationValue>{footerInformation.value}</FooterInformationValue>
        </p>
      </CardFooter>
    </CardWrapper>
  )
}

export default Card
