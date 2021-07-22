import { render, screen } from '@testing-library/react'
import App from '../components/app'

test('renders initial screen', () => {
  render(<App />)
  const presentationElement = screen.getByText(/Startec ReactJS Test/i)
  expect(presentationElement).toBeInTheDocument()
})
