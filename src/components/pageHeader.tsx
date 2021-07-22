import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backIcon from '../assets/icons/back.svg'

interface PageHeaderProps {
  children?: React.ReactNode
  title: string
  description?: string
}

const PageHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-secundary);

  @media (min-width: 700px) {
    height: 340px;
  }
`

const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`

const GoBackLink = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

const SiteName = styled.div`
  color: var(--color-title-in-primary);
`

const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

const HeaderTitle = styled.strong`
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);

  @media (min-width: 700px) {
    max-width: 450px;
  }
`

const HeaderDescription = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--color-text-in-primary);
  margin-top: 2.4rem;
`

function PageHeader({ children, title, description }: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
      <TopBarContainer>
        <GoBackLink to='/'>
          <img src={backIcon} alt='Voltar' />
        </GoBackLink>
        <SiteName>Startec ReactJS Test</SiteName>
      </TopBarContainer>

      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        {description ? <HeaderDescription>{description}</HeaderDescription> : null}

        {children}
      </HeaderContent>
    </PageHeaderWrapper>
  )
}

export default PageHeader
