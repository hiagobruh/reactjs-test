import { render, screen } from '@testing-library/react'
import Card from '../components/card'
import testImage from '../assets/images/testImage.jpg'

test('renders with only required parameters', () => {
  const title = 'cardTitle'
  const footerInformationDescription = 'footerInformationDescription'
  const footerInformationValue = 'footerInformationValue'

  render(
    <Card
      title={title}
      footerInformation={{
        description: footerInformationDescription,
        value: footerInformationValue,
      }}
    />,
  )

  const titleElement = screen.getByText(title)
  const footerInformationDescriptionElement = screen.getByText(footerInformationDescription)
  const footerInformationValueElement = screen.getByText(footerInformationValue)

  expect(titleElement).toBeInTheDocument()
  expect(footerInformationDescriptionElement).toBeInTheDocument()
  expect(footerInformationValueElement).toBeInTheDocument()
})

test('renders with all parameters', () => {
  const title = 'cardTitle'
  const subtitle = 'cardSubtitle'
  const description = 'description'
  const footerInformationDescription = 'footerInformationDescription'
  const footerInformationValue = 'footerInformationValue'

  render(
    <Card
      title={title}
      subtitle={subtitle}
      avatarSource={testImage}
      description={description}
      footerInformation={{
        description: footerInformationDescription,
        value: footerInformationValue,
      }}
    />,
  )

  const titleElement = screen.getByText(subtitle)
  const subtitleElement = screen.getByText(subtitle)
  const avatarElement = screen.getByAltText(title)
  const descriptionElement = screen.getByText(description)
  const footerInformationDescriptionElement = screen.getByText(footerInformationDescription)
  const footerInformationValueElement = screen.getByText(footerInformationValue)

  expect(titleElement).toBeInTheDocument()
  expect(subtitleElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
  expect(footerInformationDescriptionElement).toBeInTheDocument()
  expect(footerInformationValueElement).toBeInTheDocument()

  expect(avatarElement).toHaveAttribute('src', testImage)
})
