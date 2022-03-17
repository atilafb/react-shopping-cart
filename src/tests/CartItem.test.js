import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartItem from '../components/CartItem'

describe('<CartItem />', () => {
  it('should render a cart item name and description correctly', () => {
    render(<CartItem product={{name:'item', description:'um item'}} removeFromCart={() => { }}/>)
    expect(screen.getByText(/item: um item/i)).toBeInTheDocument()
  })

  it('should render a button correctly', () => {
    render(<CartItem product={{name:'item', description:'um item'}} removeFromCart={() => { }}/>)
    expect(screen.getByRole('button', {name: 'Remove from Cart'})).toBeInTheDocument()
  })

  describe('when remove from cart button clicked', () => {
    it('should calls the removeCart function', () => {
      const removeFromCartFunction = jest.fn()
      render(<CartItem product={{name:'item', description:'um item'}} removeFromCart={removeFromCartFunction}/>)

      const removeFromCartButton = screen.getByRole('button', {name: "Remove from Cart"})
      userEvent.click(removeFromCartButton)

      expect(removeFromCartFunction).toHaveBeenLastCalledWith({ name:'item', description:'um item' })
    })
  })
})
