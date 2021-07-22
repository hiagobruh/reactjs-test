import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: var(--color-secundary);

  align-items: center;
  justify-content: center;
`

const NotFoundBackground = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

const NotFoundTitle = styled.h2`
  color: var(--color-button-text);
  margin-bottom: 1.4rem;
`

const NotFoundExplanation = styled.p`
  color: var(--color-button-text);
  width: 30%;
  text-align: center;
`

const GoBackButton = styled.button`
  margin-top: 2rem;

  width: 10rem;
  height: 5rem;
  border-radius: 0.8rem;

  cursor: pointer;

  border-radius: 7px;
  border-bottom-left-radius: 0;

  background-color: var(--color-primary-light);
  color: var(--color-secundary);
  border-color: var(--color-primary-light);

  transition: all 0.3s;

  &:hover {
    border-radius: 0px;

    border-color: var(--color-primary);
    color: var(--color-primary);
    background-color: var(--background-color);
  }
`

function NotFound() {
  const history = useHistory()

  return (
    <NotFoundPage>
      <NotFoundBackground>
        <NotFoundTitle>Página não encontrada</NotFoundTitle>
        <NotFoundExplanation>A página que você está buscando não existe.</NotFoundExplanation>
        <GoBackButton type='button' onClick={() => history.goBack()}>
          Voltar
        </GoBackButton>
      </NotFoundBackground>
    </NotFoundPage>
  )
}

export default NotFound
