import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddressForm from '../components/Checkout'

describe('<AddressForm />', () => {
  it('renders the Shipping Address heading name', () => {
    render(<AddressForm />)
    expect(screen.getAllByText('Shipping address')[1]).toBeInTheDocument()
  })
  it('renders the First Name field', () => {
    render(<AddressForm />)
    expect(screen.getByText('First name')).toBeInTheDocument()
  })
  it('renders the Last Name field', () => {
    render(<AddressForm />)
    expect(screen.getByText('Last name')).toBeInTheDocument()
  })
  it('renders the Address line 1 field', () => {
    render(<AddressForm />)
    expect(screen.getByText('Address line 1')).toBeInTheDocument()
  })
  it('renders the Address line 2 field', () => {
    render(<AddressForm />)
    expect(screen.getByText('Address line 2')).toBeInTheDocument()
  })
  it('renders the Zip/Postal code field', () => {
    render(<AddressForm />)
    expect(screen.getByText('Zip / Postal code')).toBeInTheDocument()
  })
  it('renders the City field', () => {
    render(<AddressForm />)
    expect(screen.getByText('City')).toBeInTheDocument()
  })
  it('renders the Country field', () => {
    render(<AddressForm />)
    expect(screen.getAllByText('Country')[0]).toBeInTheDocument()
  })
  it('renders the State/Province/Region field', () => {
    render(<AddressForm />)
    expect(screen.getAllByText('State/Province/Region')[0]).toBeInTheDocument()
  })

  describe('when click Country select field', () => {
    it('shows the Menu List with all countries', () => {
      render(<AddressForm />)
      const countrySelect = (screen.getByRole('button', { name: 'Country' }))

      userEvent.click(countrySelect)
      expect(screen.getByText('Brazil')).toBeInTheDocument()
    })
  })
  
  describe('when click State/Province/Region select field', () => {
    it('shows the Menu List with all states of the selected country', () => {
      render(<AddressForm />)
      const countrySelect = (screen.getByRole('button', { name: 'Country' }))
      userEvent.click(countrySelect)

      expect(screen.getByText('Brazil')).toBeInTheDocument()

      const countryOption = (screen.getByRole('option', { name: 'Brazil' }))
      userEvent.click(countryOption)

      const provinceSelect = (screen.getByRole('button', { name: 'State/Province/Region' }))
      userEvent.click(provinceSelect)

      expect(screen.getByText('Acre')).toBeInTheDocument()
      expect(screen.queryByText('Buenos Aires')).not.toBeInTheDocument()
    })
  })
})
