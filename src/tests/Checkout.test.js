import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkout from '../components/Checkout'

function addressFormFields() {
  const firstNameField = screen.getByRole('textbox', { name: 'First name' })
  userEvent.type(firstNameField, 'Joao')

  const lastNameField = screen.getByRole('textbox', { name: 'Last name' })
  userEvent.type(lastNameField, 'Silva')

  const addressLine1Field = screen.getByRole('textbox', { name: 'Address line 1' })
  userEvent.type(addressLine1Field, 'Avenida principal, 100')

  const zipField = screen.getByRole('textbox', { name: /zip \/ postal code/i })
  userEvent.type(zipField, '60000000')

  const cityField = screen.getByRole('textbox', { name: 'City' })
  userEvent.type(cityField, 'Fortaleza')

  const countrySelect = (screen.getByRole('button', { name: 'Country' }))
  userEvent.click(countrySelect)

  const countryOption = (screen.getByRole('option', { name: 'Brazil' }))
  userEvent.click(countryOption)

  const provinceSelect = (screen.getByRole('button', { name: 'State/Province/Region' }))
  userEvent.click(provinceSelect)

  const provinceOption = (screen.getByRole('option', { name: 'Ceara' }))
  userEvent.click(provinceOption)
}

function paymentFormFields() {
  const cardNameField = screen.getByRole('textbox', { name: 'Name on card' })
  userEvent.type(cardNameField, 'JOAO SILVA')

  const cardNumberField = screen.getByRole('textbox', { name: 'Card number' })
  userEvent.type(cardNumberField, '1234567890123344')

  const expiryDateField = screen.getByRole('textbox', { name: 'Expiry date' })
  userEvent.type(expiryDateField, '03/28')

  const cvvNumberField = screen.getByRole('textbox', { name: 'CVV' })
  userEvent.type(cvvNumberField, '123')
}

describe('<Checkout />', () => {
  it('renders Checkout name', () => {
    render(<Checkout />)
    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })

  it('renders Shipping Address name', () => {
    render(<Checkout />)
    expect(screen.getAllByText('Shipping address')[1]).toBeInTheDocument()
  })

  describe('when click Next button', () => {
    it('renders the Payment method name', () => {
      render(<Checkout />)
      addressFormFields()

      const nextButton = screen.getByRole('button', { name: 'Next' })
      userEvent.click(nextButton)

      expect(screen.getByText('Payment method')).toBeInTheDocument()
    })
  })

  describe('when click Next button two times', () => {
    it('renders the Order summary name', () => {
      render(<Checkout cartItem={[
        {
          "id": 2,
          "name": "Lapis",
          "description": "Um lapis",
          "price": "1.00"
        }
      ]}/>) 
      addressFormFields()
      const nextButton = screen.getByRole('button', { name: 'Next' })
      userEvent.click(nextButton)

      expect(screen.getByText('Payment method')).toBeInTheDocument()

      paymentFormFields()
      userEvent.click(nextButton)

      expect(screen.getByText('Order summary')).toBeInTheDocument()
    })
  })
})
