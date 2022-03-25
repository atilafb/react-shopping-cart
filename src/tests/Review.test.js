import { render, screen } from '@testing-library/react'
import Review from '../components/Checkout/Review'

const formValuesObj = {
  "firstName": "joao",
  "lastName": "silva",
  "address1": "rua 1",
  "address2": "rua 2",
  "zip": "0000",
  "city": "fortal",
  "country": "Argentina",
  "province": "Buenos Aires",
  "cardName": "JOAO SILVA",
  "cardNumber": "1234567890123344",
  "expiryDate": "02/30",
  "cvvNumber": "123"
}

describe('<Review />', () => {
  it('renders the Order Summary heading name', () => {
    render(<Review formValues={formValuesObj}/>)
    expect(screen.getByText('Order summary')).toBeInTheDocument()
  })

  describe('Shipping informations', () => {
    it('renders the Full name given in previous form', () => {
      render(<Review formValues={formValuesObj}/>)
      expect(screen.getByText('joao silva')).toBeInTheDocument()
    })
    it('renders all Address information given in previous form', () => {
      render(<Review formValues={formValuesObj}/>)
      expect(screen.getByText(/rua 1, rua 2, fortal, 0000, argentina, buenos aires/i)).toBeInTheDocument()
    })
  })

  describe('Payment details', () => {
    it('renders the Card holder given in previous form', () => {
      render(<Review formValues={formValuesObj}/>)

      expect(screen.getByText('Card holder')).toBeInTheDocument()
      expect(screen.getByText('JOAO SILVA')).toBeInTheDocument()
    })
    it('renders the Card number given in previous form showing only the last 4 numbers', () => {
      render(<Review formValues={formValuesObj}/>)

      expect(screen.getByText('Card number')).toBeInTheDocument()
      expect(screen.getByText(/xxxx\-xxxx\-xxxx\-3344/i)).toBeInTheDocument()
    })
    it('renders the card Expiry date given in previous form', () => {
      render(<Review formValues={formValuesObj}/>)

      expect(screen.getByText('Expiry date')).toBeInTheDocument()
      expect(screen.getByText(/02\/30/i)).toBeInTheDocument()
    })
  })
})
