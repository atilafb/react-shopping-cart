import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Store from '../components/Store'

describe('<Store />', () => {
  describe('when render Products page', () => {
    it('renders product Caneta informations', () => {
      render(<Store />)
      const canetaView = screen.getByText(/caneta: uma caneta/i);

      expect(canetaView).toBeInTheDocument()
    })
    it('renders product Lapis informations', () => {
      render(<Store />)
      const lapisView = screen.getByText(/lapis: um lapis/i)

      expect(lapisView).toBeInTheDocument()
    })
    it('renders product Caderno informations', () => {
      render(<Store />)
      const cadernoView = screen.getByText(/caderno: um caderno/i)

      expect(cadernoView).toBeInTheDocument()
    })
  })

  describe('when a product is clicked to be added to the Cart', () => {
    it('renders on the Cart page', () => {
      render(<Store />)

      const addToCartButton = screen.getAllByRole('button', {name: 'Add to Cart'})[1]
      userEvent.click(addToCartButton)

      const cartPageButton = screen.getByRole('button', {name: 'Cart'})
      userEvent.click(cartPageButton)

      expect(screen.getByText(/lapis: um lapis/i)).toBeInTheDocument()
    })
  })

  describe('when a product is clicked to be removed from the Cart', () => {
    it('does not render on the Cart page', () => {
      render(<Store />)
      const addToCartButton = screen.getAllByRole('button', {name: 'Add to Cart'})[1]
      userEvent.click(addToCartButton)

      const cartPageButton = screen.getByRole('button', {name: 'Cart'})
      userEvent.click(cartPageButton)

      expect(screen.getByText(/lapis: um lapis/i)).toBeInTheDocument()

      const removeFromCartButton = screen.getByRole('button', {name: 'Remove from Cart'})
      userEvent.click(removeFromCartButton)

      expect(screen.queryByText(/lapis: um lapis/i)).not.toBeInTheDocument()
    })
  })

  describe('when click on Checkout button', () => {
    it('renders the Checkout page', () => {
      render(<Store />)
      const cartPageButton = screen.getByRole('button', {name: 'Cart'})
      userEvent.click(cartPageButton)

      expect(screen.getByRole('button', {name: 'Checkout'})).toBeInTheDocument()
      
      const checkoutPageButton = screen.getByRole('button', {name: 'Checkout'})
      userEvent.click(checkoutPageButton)

      expect(screen.getByText('Checkout')).toBeInTheDocument()
      
    })
  })
})
