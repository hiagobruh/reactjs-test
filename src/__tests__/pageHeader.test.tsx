import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PageHeader from '../components/pageHeader'

test('renders with only required parameters', async () => {
  const title = 'title'

  render(
    <MemoryRouter>
      <PageHeader title={title} />
    </MemoryRouter>,
  )

  const siteNameElement = screen.getByText('Startec ReactJS Test')
  const goBackLinkElement = screen.getByAltText('Voltar')
  const titleElement = screen.getByText(title)

  expect(siteNameElement).toBeInTheDocument()
  expect(goBackLinkElement).toBeInTheDocument()
  expect(titleElement).toBeInTheDocument()
})

test('renders with all parameters', async () => {
  const title = 'title'
  const description = 'description'
  const childrenText = 'childrenElementText'

  render(
    <MemoryRouter>
      <PageHeader title={title} description={description}>
        <div>{childrenText}</div>
      </PageHeader>
    </MemoryRouter>,
  )

  const titleElement = screen.getByText(title)
  const descriptionElement = screen.getByText(description)
  const childrenTextElement = screen.getByText(childrenText)

  expect(titleElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
  expect(childrenTextElement).toBeInTheDocument()
})
