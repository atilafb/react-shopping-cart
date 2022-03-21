import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkout from '../components/Checkout'

describe('<Checkout />', () => {
  it('renders Checkout name', () => {
    render(<Checkout />)
    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })

  it('renders Shipping Address name', () => {
    render(<Checkout />)
    expect(screen.getAllByText('Shipping address')[0]).toBeInTheDocument()
  })

  describe('when click Next button', () => {
    it('renders the Payment method name', () => {
      render(<Checkout />)
      const nextButton = screen.getByRole('button', {name: 'Next'})
      userEvent.click(nextButton)

      expect(screen.getByText('Payment method')).toBeInTheDocument
    })
  })

  describe('when click Next button two times', () => {
    it('renders the Order summary name', () => {
      render(<Checkout />)
      const nextButton = screen.getByRole('button', {name: 'Next'})
      userEvent.click(nextButton)

      expect(screen.getByText('Payment method')).toBeInTheDocument
      userEvent.click(nextButton)

      expect(screen.getByText('Order summary')).toBeInTheDocument
    })
  })
})
